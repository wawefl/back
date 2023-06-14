import { Injectable } from '@nestjs/common';
import { StudentService } from './student.service';
import * as bcrypt from 'bcryptjs';
import { AdminService } from './admin.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private studentService: StudentService,
    private adminService: AdminService,
    private readonly prisma: PrismaService,
  ) {}

  async login(
    email: string,
    password: string,
    isAdmin: boolean = false,
  ): Promise<any> {
    const user = await (isAdmin
      ? this.adminService.getAdminFromEmail(email.toLowerCase())
      : this.studentService.getStudentFromEmail(email.toLowerCase()));
    if (!user) {
      throw new Error('User not found');
    }
    const isPasswordValid = await this.validateUserPassword(password, user);
    if (!isPasswordValid) {
      throw new Error('Wrong password');
    }

    return user;
  }

  async validateUserPassword(password: string, user: any): Promise<boolean> {
    if (user && bcrypt.compareSync(password, user.password)) {
      return true;
    } else {
      return false;
    }
  }
}
