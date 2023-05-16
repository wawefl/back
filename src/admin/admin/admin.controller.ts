import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AuthService } from 'src/services/auth.service';
import { JwtService } from '@nestjs/jwt';
import { AdminService } from 'src/services/admin.service';
import { CreateAdminDto } from 'src/dto/admin.dto';
import * as bcrypt from 'bcryptjs';

@Controller('admin/admin')
export class AdminController {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
    private adminService: AdminService,
  ) {}

  @Get()
  async getAdmins(): Promise<any> {
    return this.adminService.getAll();
  }

  @Post()
  async createAdmin(@Body() body: CreateAdminDto): Promise<any> {
    body = {
      ...body,
      password: bcrypt.hashSync(body.password),
    };
    return this.adminService.createAdmin(body);
  }

  @Put()
  async updateAdmin(@Body() body): Promise<any> {
    if (body.password === '') {
      delete body.password;
    } else {
      body = {
        ...body,
        password: bcrypt.hashSync(body.password),
      };
    }
    return this.adminService.updateAdmin(body);
  }

  @Get(':adminId')
  async getAdmin(@Param('adminId') id: number): Promise<any> {
    return this.adminService.getAdmin(id);
  }
}
