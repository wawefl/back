import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from 'src/services/admin.service';
import { AuthService } from 'src/services/auth.service';
import { StudentService } from 'src/services/student.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [AdminService, AuthService, StudentService, JwtService],
  controllers: [AdminController],
})
export class AdminModule {}
