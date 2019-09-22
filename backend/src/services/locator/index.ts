import { AVAILABLE_SERVICES, IService, IServiceLocator } from './types'
import { JwtService } from '../jwt'
import { ElasticSearchService } from '../elasticsearch'
import { SocialClientService } from '../socialclient'

export * from './types'

export class Locator implements IServiceLocator {

  private readonly services: IService[]

  constructor() {
    this.services = []
  }

  get<T extends IService>(service: AVAILABLE_SERVICES): T {
    if (!this.services[service]) {
      throw new Error(`Service.Locator - ${service} - Is not registered`)
    }
    return this.services[service]
  }

  register(service: IService, serviceKey: AVAILABLE_SERVICES, cache = true): void {
    if (this.services[serviceKey]) {
      throw new Error(`Service.Locator - Duplicate service - ${serviceKey}`)
    }
    this.services[serviceKey] = service
  }
}

export {
  JwtService,
  ElasticSearchService,
  SocialClientService,
}
export default new Locator()