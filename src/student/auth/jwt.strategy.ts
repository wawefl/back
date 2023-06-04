import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import * as config from 'config';

const cookieExtractor = function (req: Request) {
  let tokenStudent = null;
  if (req && req.cookies) {
    tokenStudent = req.cookies['tokenStudent'];
  }
  return tokenStudent;
};

@Injectable()
export class JwtStudentStrategy extends PassportStrategy(
  Strategy,
  'jwtStudentSecret',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
      ignoreExpiration: false,
      secretOrKey: config.get('jwtStudentSecret'),
    });
  }

  async validate(payload) {
    console.log(payload);
    if (payload) {
      return payload;
    }
    return null;
  }
}
