import { Module } from '@nestjs/common';
import { SchoolController } from './school.controller';
import { AuthService } from 'src/services/auth.service';
import { StudentService } from 'src/services/student.service';
import { JwtService } from '@nestjs/jwt';
import { SchoolService } from 'src/services/school.service';

@Module({
  providers: [SchoolService],
  controllers: [SchoolController],
})
export class SchoolModule {}
