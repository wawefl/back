import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { LessonService } from 'src/services/lesson.service';
import { JwtStudentGuard } from '../auth/jwt.guard';

@Controller('student/lesson')
export class LessonStudentController {
  constructor(private readonly lessonService: LessonService) {}

  @UseGuards(JwtStudentGuard)
  @Post()
  async getStudents(@Body() body: any): Promise<any> {
    return this.lessonService.getAll(body);
  }

  @UseGuards(JwtStudentGuard)
  @Post()
  async createLesson(@Body() body: any): Promise<any> {
    body = {
      ...body,
      grade: { connect: { id: parseInt(body.grade) } },
    };
    return this.lessonService.createLesson(body);
  }

  @UseGuards(JwtStudentGuard)
  @Get(':lessonId')
  async getLesson(@Param('lessonId') id: number): Promise<any> {
    return this.lessonService.getLesson(id);
  }
}
