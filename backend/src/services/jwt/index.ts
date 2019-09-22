import { IService } from '../locator'
import * as jwt from 'jsonwebtoken'
import * as fs from 'fs'
import { readFileSync } from 'fs'
import { JwtSignOptions } from './types'

export class JwtService implements IService {
  protected privateKey: Buffer = null
  protected publicKey: Buffer = null

  protected constructor(protected readonly privateKeyPath: string, protected readonly publicKeyPath: string) {
    if (!fs.existsSync(privateKeyPath) || !fs.existsSync(publicKeyPath)) {
      throw new Error('Jwt service: private or public key not found')
    }
    this.privateKey = readFileSync(privateKeyPath)
    this.publicKey = readFileSync(publicKeyPath)
  }

  public static getSignOptions(subject: string, expiresIn: string = '24h'): JwtSignOptions {
    return {
      subject,
      expiresIn,
      issuer: 'Frents - evil corp',
      audience: 'https://www.frents.com',
      algorithm: 'RS256',
    }
  }

  public static factory(privateKeyPath: string, publicKeyPath: string): JwtService {
    return new this(privateKeyPath, publicKeyPath)
  }

  public signPayload(payload: object, subject: string, expiresIn?: string) {
    return jwt.sign(payload, this.privateKey, JwtService.getSignOptions(subject, expiresIn))
  }

  public verifyToken(token: string, options: JwtSignOptions) {
    return jwt.verify(token, this.publicKey, options)
  }
}
