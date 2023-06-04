import {
  Body,
  Controller,
  Get,
  UseGuards,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LessonService } from 'src/services/lesson.service';
import { JwtAdminGuard } from '../auth-admin/jwt.guard';

@Controller('admin/lesson')
export class LessonAdminController {
  constructor(private readonly lessonService: LessonService) {}

  @UseGuards(JwtAdminGuard)
  @Get()
  async getStudents(): Promise<any> {
    return this.lessonService.getAll();
  }

  @UseGuards(JwtAdminGuard)
  @Post()
  async createLesson(@Body() body: any): Promise<any> {
    body = {
      ...body,
      grade: { connect: { id: parseInt(body.grade) } },
    };
    return this.lessonService.createLesson(body);
  }

  @UseGuards(JwtAdminGuard)
  @Put()
  async updateLesson(@Body() body): Promise<any> {
    return this.lessonService.updateLesson(body);
  }

  @UseGuards(JwtAdminGuard)
  @Get(':lessonId')
  async getLesson(@Param('lessonId') id: number): Promise<any> {
    return this.lessonService.getLesson(id);
  }
}
