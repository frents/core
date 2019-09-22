import axios from 'axios'
import { IService } from '../locator'
import { IFacebookValidatedToken } from './types'

const FACEBOOK_API_HOST = 'https://graph.facebook.com'

export class SocialClientService implements IService {

  protected constructor(protected readonly facebookAppId, protected readonly facebookAppSecret) {

  }

  public static factory(facebookAppId: string, facebookAppSecret: string): SocialClientService {
    return new this(facebookAppId, facebookAppSecret)
  }

  public async getFacebookAppToken(): Promise<string> {
    const uri = `${FACEBOOK_API_HOST}/oauth/access_token?client_id=${this.facebookAppId}&client_secret=${this.facebookAppSecret}&grant_type=client_credentials`
    return await axios.get(uri).then(({ data }) => data.access_token)
  }

  public async validateFacebookUserToken(appToken: string, userToken: string): Promise<IFacebookValidatedToken> {
    const uri = `${FACEBOOK_API_HOST}/debug_token?input_token=${userToken}&access_token=${appToken}`
    return await axios.get(uri).then(({ data }) => data.data)
  }
}