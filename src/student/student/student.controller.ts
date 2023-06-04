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
import { JwtStudentGuard } from '../auth/jwt.guard';

@Controller('student/student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @UseGuards(JwtStudentGuard)
  @Get()
  async getStudents(): Promise<any> {
    return this.studentService.getAll();
  }

  @UseGuards(JwtStudentGuard)
  @Post()
  async createStudent(@Body() body: any): Promise<any> {
    body = {
      ...body,
      password: bcrypt.hashSync(body.password),
      grade: { connect: { id: parseInt(body.grade) } },
    };
    return this.studentService.createStudent(body);
  }

  @UseGuards(JwtStudentGuard)
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

  @UseGuards(JwtStudentGuard)
  @Get(':studentId')
  async getStudent(@Param('studentId') id: string): Promise<any> {
    return this.studentService.getStudent(parseInt(id));
  }
}
