import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import * as config from 'config';

const cookieExtractor = function (req: Request) {
  let tokenAdmin = null;
  if (req && req.cookies) {
    tokenAdmin = req.cookies['tokenAdmin'];
  }
  return tokenAdmin;
};

@Injectable()
export class JwtAdminStrategy extends PassportStrategy(
  Strategy,
  'jwtAdminSecret',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
      ignoreExpiration: false,
      secretOrKey: config.get('jwtAdminSecret'),
    });
  }

  async validate(payload) {
    if (payload) {
      return payload;
    }
    return null;
  }
}
