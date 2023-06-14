import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateAdminDto } from 'src/dto/admin.dto';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GradeService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const grades = await this.prisma.grade.findMany();
    if (!grades) {
      throw new NotFoundException();
    }
    return grades;
  }

  async getGrade(id: number): Promise<Prisma.Prisma__GradeClient<any>> {
    return this.prisma.grade.findUnique({ where: { id } });
  }

  async createGrade(grade: any) {
    return this.prisma.grade.create({ data: grade });
  }

  async updateGrade(grade) {
    return this.prisma.grade.update({
      data: grade,
      where: {
        id: grade.id,
      },
    });
  }
}
