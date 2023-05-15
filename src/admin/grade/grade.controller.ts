import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Request,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from 'src/services/auth.service';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { CreateAdminDto } from 'src/dto/admin.dto';
import * as bcrypt from 'bcryptjs';
import { SchoolService } from 'src/services/school.service';
import { CreateSchoolDto } from 'src/dto/school.dto';
import { GradeService } from 'src/services/grade.service';

@Controller('admin/grade')
export class GradeController {
  constructor(private gradeService: GradeService) {}

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
