import axios from 'axios'
import { authInvalidToken, authInvalidTokenSignature, authValidPayload } from './auth.faker'

describe('Auth::', function() {
  it('Valid payload', async function(done) {
    const response = await axios.post(process.env.APP_APOLLO_HOST, { query: authValidPayload() }).catch(({ response }) => done.fail(response.data))
    expect(response.status).toBe(200)
    done()
  })

  it('Invalid token', async function(done) {
    const response = await axios.post(process.env.APP_APOLLO_HOST, { query: authInvalidToken() }).catch(({ response }) => done.fail(response.data))
    expect(response.data.errors[0].message.includes('Invalid user token provided - Invalid OAuth access token')).toBe(true)
    expect(response.status).toBe(200)
    done()
  })

  it('Invalid token signature', async function(done) {
    const response = await axios
      .post(process.env.APP_APOLLO_HOST, { query: authInvalidTokenSignature() })
      .catch(({ response }) => done.fail(response.data))
    expect(response.data.errors[0].message.includes('Invalid user token provided - Bad signature -')).toBe(true)
    expect(response.status).toBe(200)
    done()
  })
})
