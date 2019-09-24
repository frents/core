import { IService } from '../locator'
import * as Redis from 'redis'

const { promisify } = require('util')

export class RedisService implements IService {
  protected client: Redis
  public getAsync: (key: string) => Promise<string | null>

  protected constructor(protected readonly host: string) {
    this.client = Redis.createClient({ host })
    this.getAsync = promisify(this.client.get).bind(this.client)
  }

  public async get<T>(key: string): Promise<T | null | object> {
    const object = await this.getAsync(key)
    return JSON.parse(object)
  }

  public set(key: string, object: object, seconds: number = 86_400) {
    this.client.set(key, JSON.stringify(object), 'EX', seconds)
  }

  public static factory(host: string) {
    return new this(host)
  }
}
