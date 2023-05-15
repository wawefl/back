import { Module } from '@nestjs/common';
import { AuthSService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  providers: [AuthSService],
  controllers: [AuthController],
})
export class AuthModule {}
