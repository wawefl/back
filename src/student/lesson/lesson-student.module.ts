import { Module } from '@nestjs/common';
import { LessonStudentController } from './lesson-student.controller';
import { LessonService } from 'src/services/lesson.service';

@Module({
  controllers: [LessonStudentController],
  providers: [LessonService],
})
export class LessonStudentModule {}
