import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StudentService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const students = await this.prisma.student.findMany();
    if (!students) {
      throw new NotFoundException();
    }
    return students;
  }

  async getStudentFromEmail(email: string): Promise<any> {
    return this.prisma.student.findUnique({ where: { email } });
  }

  async getStudent(id: number): Promise<any> {
    return this.prisma.student.findUnique({ where: { id } });
  }

  async createStudent(student: any) {
    return this.prisma.student.create({ data: student });
  }

  async updateStudent(id, student) {
    return this.prisma.student.update({
      data: student,
      where: {
        id: id,
      },
    });
  }
}
