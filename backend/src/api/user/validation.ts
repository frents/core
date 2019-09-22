import { SocialProvider } from '../../graphql/generated/graphql'
import * as Joi from '@hapi/joi'
import { USER_FIELDS } from './types'

export const validationSchema = Joi.object().keys({
  [USER_FIELDS.ID]: Joi.string()
    .uuid()
    .required(),
  [USER_FIELDS.NAME]: Joi.string().required(),
  [USER_FIELDS.PICTURE]: Joi.string().required(),
  [USER_FIELDS.PROVIDER_ID]: Joi.string().required(),
  [USER_FIELDS.EMAIL]: Joi.string()
    .email()
    .required(),
  [USER_FIELDS.CREATED_AT]: Joi.date().required(),
  [USER_FIELDS.PROVIDER]: Joi.string()
    .required()
    .valid(SocialProvider.Facebook, SocialProvider.Google),
})
