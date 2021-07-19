import jwt from 'jsonwebtoken'
import { Encrypter } from '../../../data/protocols/criptography/encrypter'

export class JwtAdapter implements Encrypter {
  private readonly secrect: string

  constructor (secrect: string) {
    this.secrect = secrect
  }

  async encrypt (value: string): Promise<string> {
    await jwt.sign({ id: value }, this.secrect)
    return null
  }
}
