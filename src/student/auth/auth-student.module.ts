import { Module } from '@nestjs/common';
import { AuthService } from '../../services/auth.service';
import { AuthStudentController } from './auth-student.controller';
import { StudentService } from 'src/services/student.service';
import { JwtModule } from '@nestjs/jwt';
import { AdminService } from 'src/services/admin.service';
import * as config from 'config';
import { JwtStudentStrategy } from './jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: config.get('jwtStudentSecret'),
      signOptions: {
        expiresIn: 60 * 60 * 24 * config.get('sessionLengthInDays'),
      },
    }),
  ],
  providers: [AuthService, StudentService, AdminService, JwtStudentStrategy],
  controllers: [AuthStudentController],
})
export class AuthStudentModule {}
