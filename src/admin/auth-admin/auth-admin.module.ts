import { Module } from '@nestjs/common';
import { AuthService } from '../../services/auth.service';
import { AuthAdminController } from './auth-admin.controller';
import { StudentService } from 'src/services/student.service';
import { JwtModule } from '@nestjs/jwt';
import { AdminService } from 'src/services/admin.service';
import * as config from 'config';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: config.get('jwtAdminSecret'),
      signOptions: {
        expiresIn: 60 * 60 * 24 * config.get('sessionLengthInDays'),
      },
    }),
  ],
  providers: [AuthService, StudentService, AdminService, JwtStrategy],
  controllers: [AuthAdminController],
})
export class AuthAdminModule {}
