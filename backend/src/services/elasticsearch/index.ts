import { Client } from '@elastic/elasticsearch'
import { IConfigureRepository, IRepository } from './types'
import { IService } from '../locator'
import { UserRepository } from '../../api/user/repository'

export class ElasticSearchService implements IService {
  private lazyLoader: IRepository[]

  protected constructor(private readonly client: Client) {
    this.lazyLoader = []
  }

  public static factory(host: string): ElasticSearchService {
    const client = new Client({
      node: host,
    })
    return new this(client)
  }

  public getRepository<T extends IRepository>(repository: { new (client: Client): T }): T {
    if (!repository) {
      throw new Error(`getRepository: The repository - ${repository} - you are trying to pass in is - ${repository}`)
    }
    const instance = this.lazyLoader.find(cachedInstance => cachedInstance instanceof repository)
    if (!instance) {
      const newInstance = new repository(this.client)
      this.lazyLoader.push(newInstance)
      return newInstance
    }
    return instance as T
  }

  public validateConnection(): void {
    this.client.ping().catch(error => {
      throw new Error(`ElasticSearch cluster - ${process.env.ES_ENDPOINT} - is not available: - ${error.message} -`)
    })
  }

  public getRepositoryList(): IRepository[] {
    return [this.getRepository<UserRepository>(UserRepository)]
  }

  public async configureIndex(repository: IRepository, config: IConfigureRepository): Promise<any> {
    if (config.deleteBefore) {
      await repository.deleteIndex()
    }
    return await repository.createIndex()
  }

  public getClient() {
    return this.client
  }
}
