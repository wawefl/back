import { Module } from '@nestjs/common';
import { LessonAdminController } from './lesson-admin.controller';
import { LessonService } from 'src/services/lesson.service';

@Module({
  controllers: [LessonAdminController],
  providers: [LessonService],
})
export class LessonAdminModule {}
