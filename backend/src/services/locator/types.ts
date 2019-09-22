export enum AVAILABLE_SERVICES {
  ELASTICSEARCH = 'ELASTICSEARCH',
  SOCIAL_CLIENT = 'SOCIAL_CLIENT',
  JWT = 'JWT',
}

export interface IService {}

export interface IServiceLocator {
  register(service: IService, serviceKey: AVAILABLE_SERVICES, cache: boolean): void

  get<T extends IService>(service: AVAILABLE_SERVICES): T
}
