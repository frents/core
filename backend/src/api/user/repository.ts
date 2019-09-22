import { elasticSearchIndex } from '../../services/elasticsearch/decorators'
import { indexConfig } from './config'
import { IRepository, QUERY_TYPE } from '../../services/elasticsearch/types'
import { AbstractRepository } from '../../services/elasticsearch/abstract'
import { User } from '../../graphql/generated/graphql'
import { v4 } from 'uuid'

@elasticSearchIndex(indexConfig)
export class UserRepository extends AbstractRepository implements IRepository {

  public async createModel(user: Partial<User>): Promise<User> {
    const newUser = {
      id: v4(),
      createdAt: new Date().toString(),
      ...user,
    } as User
    const isValid = this.validateModel(newUser)
    if (isValid.error) {
      throw new Error(isValid.error.message)
    }
    await this.saveModel(isValid, QUERY_TYPE.CREATE).catch(e => console.log('e ::>', e))
    return newUser
  }
}
