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

@Controller('admin/school')
export class SchoolController {
  constructor(private schoolService: SchoolService) {}

  @Post()
  async createSchool(@Body() body: CreateSchoolDto): Promise<any> {
    return this.schoolService.createSchool(body);
  }

  @Put()
  async updateSchool(@Body() body): Promise<any> {
    return this.schoolService.updateSchool(body);
  }

  @Get(':schoolId')
  async getSchool(@Param('schoolId') id: string): Promise<any> {
    return this.schoolService.getSchool(parseInt(id));
  }
}
