import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { SchoolService } from 'src/services/school.service';
import { CreateSchoolDto } from 'src/dto/school.dto';
import { JwtAdminGuard } from '../auth-admin/jwt.guard';

@Controller('admin/school')
export class SchoolController {
  constructor(private schoolService: SchoolService) {}

  @UseGuards(JwtAdminGuard)
  @Post()
  async createSchool(@Body() body: CreateSchoolDto): Promise<any> {
    return this.schoolService.createSchool(body);
  }

  @UseGuards(JwtAdminGuard)
  @Put()
  async updateSchool(@Body() body): Promise<any> {
    return this.schoolService.updateSchool(body);
  }

  @UseGuards(JwtAdminGuard)
  @Get(':schoolId')
  async getSchool(@Param('schoolId') id: string): Promise<any> {
    return this.schoolService.getSchool(parseInt(id));
  }
}
