import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { StudentService } from 'src/services/student.service';
import * as bcrypt from 'bcryptjs';
import { JwtAdminGuard } from '../auth-admin/jwt.guard';

@Controller('admin/student')
export class StudentAdminController {
  constructor(private readonly studentService: StudentService) {}

  @UseGuards(JwtAdminGuard)
  @Get()
  async getStudents(): Promise<any> {
    return this.studentService.getAll();
  }

  @UseGuards(JwtAdminGuard)
  @Post()
  async createStudent(@Body() body: any): Promise<any> {
    body = {
      ...body,
      password: bcrypt.hashSync(body.password),
      grade: { connect: { id: parseInt(body.grade) } },
    };
    return this.studentService.createStudent(body);
  }

  @UseGuards(JwtAdminGuard)
  @Put()
  async updateStudent(@Body() body): Promise<any> {
    if (body.password === '') {
      delete body.password;
    } else {
      body = {
        ...body,
        password: bcrypt.hashSync(body.password),
      };
    }
    return this.studentService.updateStudent(body);
  }

  @UseGuards(JwtAdminGuard)
  @Get(':studentId')
  async getStudent(@Param('studentId') id: number): Promise<any> {
    return this.studentService.getStudent(id);
  }
}
