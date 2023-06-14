import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSchoolDto } from 'src/dto/school.dto';

@Injectable()
export class SchoolService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const admins = await this.prisma.school.findMany();
    if (!admins) {
      throw new NotFoundException();
    }
    return admins;
  }

  async getSchool(id: number): Promise<Prisma.Prisma__SchoolClient<any>> {
    return this.prisma.school.findUnique({ where: { id: id } });
  }

  async createSchool(school: CreateSchoolDto) {
    return this.prisma.school.create({ data: school });
  }

  async updateSchool(school) {
    return this.prisma.school.update({
      data: school,
      where: {
        id: school.id,
      },
    });
  }
}
