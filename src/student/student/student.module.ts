import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from 'src/services/student.service';

@Module({
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
