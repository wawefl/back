import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class LessonService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(param?: any) {
    const lessons = await this.prisma.lesson.findMany(param);
    if (!lessons) {
      throw new NotFoundException();
    }
    return lessons;
  }

  async getLesson(id: number): Promise<Prisma.Prisma__LessonClient<any>> {
    return this.prisma.lesson.findUnique({ where: { id } });
  }

  async createLesson(lesson: any) {
    return this.prisma.lesson.create({ data: lesson });
  }

  async updateLesson(id, lesson) {
    return this.prisma.lesson.update({
      data: lesson,
      where: {
        id: id,
      },
    });
  }
}
