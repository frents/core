import { IElasticSearchIndexConfig } from '../../services/elasticsearch/types'
import { validationSchema } from './validation'
import { elasticSearchProperties } from './es'

export const indexConfig: IElasticSearchIndexConfig = {
  name: `${process.env.APP_STAGE}_users`,
  type: 'user',
  typeValidationSchema: validationSchema,
  mappings: {
    properties: { ...elasticSearchProperties },
  },
}
