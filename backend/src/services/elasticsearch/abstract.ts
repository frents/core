import { ApiResponse, Client } from '@elastic/elasticsearch'
import { IModel } from './model'
import * as Joi from '@hapi/joi'
import { QUERY_TYPE, ValidatedModel } from './types'
import * as bodybuilder from 'bodybuilder'

export abstract class AbstractRepository {
  public readonly indexType: string
  public readonly indexName: string
  public readonly indexTypeValidationSchema: Joi.Schema
  public readonly indexMap: object

  constructor(protected readonly client: Client) {

  }

  public saveModel<T extends IModel>(model: ValidatedModel<T>, queryType: QUERY_TYPE): Promise<ApiResponse> {
    const { id, ...body } = model.value
    const refresh = 'wait_for'
    const object = {
      id,
      index: this.indexName,
      type: '_doc',
    }
    if (queryType === QUERY_TYPE.UPDATE) {
      return this.client.update({
        body: { doc: body },
        ...object,
        refresh,
      })
    }
    return this.client.create({
      ...object,
      body,
      refresh,
    })
  }

  public async findOneByField<T>(field: string, value: string): Promise<T> {
    const { body } = await this.client.search({ body: bodybuilder().query('match', field, value).build() })
    if (body && body.hits && body.hits.total.value > 0) {
      return AbstractRepository.composeModelFromEsResult<T>(body.hits.hits[0])
    }
    return null
  }

  public validateModel<T>(model: T): ValidatedModel<T> {
    return this.indexTypeValidationSchema.validate(model)
  }

  protected static composeModelFromEsResult<T>(record: { _id: string; _source: unknown }): T {
    return { id: record._id, ...record._source } as T
  }

  protected static composeModelsFromEsResult<T>(records: { _id: string; _source: unknown }[]): T[] {
    return records.map(record => AbstractRepository.composeModelFromEsResult<T>(record))
  }

  public deleteById(id: string): Promise<ApiResponse> {
    return this.client.delete({ id, index: this.indexName })
  }

  public async deleteIndex() {
    return this.client.indices.delete({ index: this.indexName })
  }

  public async createIndex() {
    const exist = await this.client.indices.exists({
      index: this.indexName,
    })
    console.log('createIndex ::>', exist)
    return this.client.indices.create({ index: this.indexName, body: { mappings: { ...this.indexMap } } })
  }
}
