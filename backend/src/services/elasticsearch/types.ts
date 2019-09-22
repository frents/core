import { IModel } from './model'
import { ApiResponse } from '@elastic/elasticsearch'
import { ValidationResult } from '@hapi/joi'

export interface IRepository {
  readonly indexName: string
  readonly indexMap: object
  readonly indexType: string
  readonly indexTypeValidationSchema: object

  saveModel<T extends IModel>(model: ValidatedModel<T>, queryType: QUERY_TYPE): Promise<ApiResponse>

  validateModel<T extends IModel>(model: T): ValidatedModel<T>

  createIndex(): Promise<any>

  deleteIndex(): Promise<any>
}

export interface IElasticSearchIndexConfig {
  name: string
  type: string
  typeValidationSchema: object
  mappings: { properties: object }
}

export interface IConfigureRepository {
  deleteBefore: boolean
}

export const DEFAULT_PAGINATOR_FROM = 0
export const DEFAULT_PAGINATOR_SIZE = 25

export interface IPaginator {
  from: number
  size: number
  total?: number
}

export interface ICollection<T extends IModel> {
  data: T[]
  paginator: IPaginator
}

export enum QUERY_TYPE {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
}

export type ValidatedModel<T> = ValidationResult<Readonly<T>>
