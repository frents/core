require('dotenv').config()
import axios from 'axios'

const args = process.argv.slice(2)

if (!Array.isArray(args) || !args[0]) throw new Error('You must provide a short live Facebook token')

const URI = `https://graph.facebook.com/v2.8/oauth/access_token?grant_type=fb_exchange_token&client_id=${process.env.APP_FB_ID}&client_secret=${process.env.APP_FB_SECRET}&fb_exchange_token=${args[0]}`

axios.get(URI)
  .then(({ data }) => console.log(data))
  .catch((error) => console.log('Error', error.response.data))