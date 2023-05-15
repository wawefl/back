import {
  Controller,
  Get,
  Post,
  Request,
  Res,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from 'src/services/auth.service';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { JwtGuard } from './jwt.guard';

@Controller('admin/auth')
export class AuthAdminController {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
  ) {}

  @Post('login')
  async loginWithPassword(
    // @Headers('Authorization') authHeader: string,
    @Res({ passthrough: true }) res: Response,
    @Request() req,
  ): Promise<any> {
    try {
      const admin = await this.authService.login(
        req.body.email,
        req.body.password,
        true,
      );
      console.log(admin);

      const jwtToken = this.getJwtToken(admin);
      this.setTokenCookie(res, jwtToken);

      console.log(jwtToken);
      // return true;
      return { admin: admin, token: jwtToken };
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException();
    }
  }

  @UseGuards(JwtGuard)
  @Get('user')
  async user(
    @Request() req,
    @Res({ passthrough: true }) res: Response,
  ): Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { exp, iat, ...user } = req.user;
    // refresh token
    const newJwtToken = this.getJwtToken(user);
    this.setTokenCookie(res, newJwtToken);
    return user;
  }

  @UseGuards(JwtGuard)
  @Post('logout')
  async logout(
    @Request() req,
    @Res({ passthrough: true }) res: Response,
  ): Promise<void> {
    // await this.authService.logout(req.user);

    this.removeTokenCookie(res);
  }

  getJwtToken(user: any): string {
    return this.jwtService.sign(user);
  }

  setTokenCookie(res: Response, token: string) {
    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      domain: 'localhost',
    });
  }

  removeTokenCookie(res: Response) {
    res.cookie('token', '', {
      maxAge: -1,
      path: '/',
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      domain: 'localhost',
    });
  }
}
