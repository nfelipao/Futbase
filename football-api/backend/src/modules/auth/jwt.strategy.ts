import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {

    const secretKey = configService.get<string>('JWT_SECRET') || 'default_secret_key';

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secretKey
    });
  }

  async validate(payload: any) {
    // Este objeto se adjuntará como req.user
    return { userId: payload.sub, email: payload.email };
  }
}
