import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { GradeService } from '../../services/grade.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('commun/grade')
export class GradeController {
  constructor(private gradeService: GradeService) {}

  @UseGuards(AuthGuard(['jwtAdminSecret', 'jwtStudentSecret']))
  @Get()
  async getAll(): Promise<any> {
    return this.gradeService.getAll();
  }

  @UseGuards(AuthGuard(['jwtAdminSecret', 'jwtStudentSecret']))
  @Get(':gradeId')
  async getGrade(@Param('gradeId') id: string): Promise<any> {
    return this.gradeService.getGrade(parseInt(id));
  }

  @UseGuards(AuthGuard(['jwtAdminSecret', 'jwtStudentSecret']))
  @Post()
  async createGrade(@Body() body: any): Promise<any> {
    body = {
      ...body,
      level: parseInt(body.level),
    };
    return this.gradeService.createGrade(body);
  }

  @UseGuards(AuthGuard(['jwtAdminSecret', 'jwtStudentSecret']))
  @Put()
  async updateGrade(@Body() body): Promise<any> {
    return this.gradeService.updateGrade(body);
  }
}
