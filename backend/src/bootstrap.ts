require('dotenv').config()
import { SocialClientService } from './services/socialclient'
import Locator, { AVAILABLE_SERVICES } from './services/locator'
import { ElasticSearchService } from './services/elasticsearch'
import * as path from 'path'
import { JwtService } from './services/jwt'

export const validateEnv = (): void => {
  const envs = ['APP_ES_HOST', 'APP_STAGE', 'APP_FB_ID', 'APP_FB_SECRET']
  envs.forEach(validEnv => {
    if (!process.env[validEnv]) {
      throw new Error(`validateEnv: The env ${validEnv} is - ${process.env[validEnv]}`)
    }
  })
}

validateEnv()

const privateKey = path.resolve('./assets/jwt_key.pem')
const publicKey = path.resolve('./assets/jwt_key.pub')

Locator.register(ElasticSearchService.factory(process.env.APP_ES_HOST), AVAILABLE_SERVICES.ELASTICSEARCH)
Locator.register(SocialClientService.factory(process.env.APP_FB_ID, process.env.APP_FB_SECRET), AVAILABLE_SERVICES.SOCIAL_CLIENT)
Locator.register(JwtService.factory(privateKey, publicKey), AVAILABLE_SERVICES.JWT)
