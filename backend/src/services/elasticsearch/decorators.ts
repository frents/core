import { IElasticSearchIndexConfig } from './types'

export const elasticSearchIndex = (indexConfig: IElasticSearchIndexConfig) => (constructor: any) => {
  if (!indexConfig.name || !indexConfig.type || !indexConfig.mappings || !indexConfig.typeValidationSchema) {
    throw new Error('elasticSearchIndex decorator requires all input parameters')
  }
  constructor.prototype.indexName = indexConfig.name
  constructor.prototype.indexType = indexConfig.type
  constructor.prototype.indexTypeValidationSchema = indexConfig.typeValidationSchema
  constructor.prototype.indexMap = indexConfig.mappings
}
