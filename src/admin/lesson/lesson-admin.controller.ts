import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LessonService } from 'src/services/lesson.service';

@Controller('admin/lesson')
export class LessonAdminController {
  constructor(private readonly lessonService: LessonService) {}

  @Get()
  async getStudents(): Promise<any> {
    return this.lessonService.getAll();
  }

  @Post()
  async createLesson(@Body() body: any): Promise<any> {
    body = {
      ...body,
      grade: { connect: { id: parseInt(body.grade) } },
    };
    return this.lessonService.createLesson(body);
  }

  @Put()
  async updateLesson(@Body() body): Promise<any> {
    return this.lessonService.updateLesson(body);
  }

  @Get(':lessonId')
  async getLesson(@Param('lessonId') id: number): Promise<any> {
    return this.lessonService.getLesson(id);
  }
}
