import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateAdminDto } from 'src/dto/admin.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const admins = await this.prisma.admin.findMany();
    if (!admins) {
      throw new NotFoundException();
    }
    return admins;
  }

  async getAdminFromEmail(email: string): Promise<any> {
    return this.prisma.admin.findUnique({ where: { email } });
  }

  async getAdmin(id: number): Promise<Prisma.Prisma__AdminClient<any>> {
    return this.prisma.admin.findUnique({ where: { id } });
  }

  async createAdmin(admin: CreateAdminDto) {
    return this.prisma.admin.create({ data: admin });
  }

  async updateAdmin(admin) {
    return this.prisma.admin.update({
      data: admin,
      where: {
        id: admin.id,
      },
    });
  }
}
