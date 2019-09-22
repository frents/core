export interface JwtSignOptions {
  subject: string
  expiresIn: string
  issuer: string
  audience: string
  algorithm: string
}