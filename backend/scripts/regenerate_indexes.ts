require('dotenv').config()
import { ElasticSearchService } from '../src/services/elasticsearch'
import { IRepository } from '../src/services/elasticsearch/types'

if (!process.env.APP_STAGE || !process.env.APP_ES_HOST) {
  throw new Error('Create index is not able to start')
}

if (!process.env.APP_STAGE.includes('developer')) {
  throw new Error('Warning! app stage doesn\'t contains "developer" keyword')
}

const es = ElasticSearchService.factory(process.env.APP_ES_HOST)

async function configureIndexes() {
  // TODO: Running this script in prod will be very cool...may some kind of "protection" will save lots of swearing
  await Promise.all(es.getRepositoryList().map((repository: IRepository) =>
    repository.deleteIndex().catch(error => console.log(error.message))),
  )

  await Promise.all(es.getRepositoryList().map((repository: IRepository) =>
    repository.createIndex().catch(error => console.log(error.message))),
  )
}


configureIndexes().catch(error => console.log(error))