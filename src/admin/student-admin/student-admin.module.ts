import { Module } from '@nestjs/common';
import { StudentAdminController } from './student-admin.controller';
import { StudentService } from 'src/services/student.service';

@Module({
  controllers: [StudentAdminController],
  providers: [StudentService],
})
export class StudentAdminModule {}
