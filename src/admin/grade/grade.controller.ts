import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { GradeService } from 'src/services/grade.service';
import { JwtGuard } from '../auth-admin/jwt.guard';

@Controller('commun/grade')
export class GradeController {
  constructor(private gradeService: GradeService) {}

  @UseGuards(JwtGuard)
  @Get()
  async getAll(): Promise<any> {
    return this.gradeService.getAll();
  }

  @Get(':gradeId')
  async getGrade(@Param('gradeId') id: string): Promise<any> {
    return this.gradeService.getGrade(parseInt(id));
  }

  @Post()
  async createGrade(@Body() body: any): Promise<any> {
    body = {
      ...body,
      level: parseInt(body.level),
    };
    return this.gradeService.createGrade(body);
  }

  @Put()
  async updateGrade(@Body() body): Promise<any> {
    return this.gradeService.updateGrade(body);
  }
}
