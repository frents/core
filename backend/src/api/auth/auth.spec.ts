import axios from 'axios'
import { authInputFaker } from './auth.faker'

describe('Auth::', function() {
  it('Valid payload', async function(done) {
    const response = await axios.post(process.env.APP_APOLLO_HOST, { query: authInputFaker() }).catch(({ response }) => done.fail(response.data))
    expect(response.status).toBe(200)
    done()
  })
})
