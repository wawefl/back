import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { StudentService } from 'src/services/student.service';

@Controller('admin/student')
export class StudentAdminController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  async getStudents(): Promise<any> {
    return this.studentService.getAll();
  }
}
