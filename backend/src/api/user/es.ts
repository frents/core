import { USER_FIELDS } from './types'

export const elasticSearchProperties = {
  [USER_FIELDS.NAME]: { type: 'keyword' },
  [USER_FIELDS.PICTURE]: { type: 'text' },
  [USER_FIELDS.EMAIL]: { type: 'keyword' },
  [USER_FIELDS.PROVIDER]: { type: 'keyword' },
  [USER_FIELDS.PROVIDER_ID]: { type: 'keyword' },
  [USER_FIELDS.CREATED_AT]: { type: 'date' },
}