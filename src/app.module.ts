import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
// import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { AdminModule } from './admin/admin/admin.module';
import { AuthAdminModule } from './admin/auth-admin/auth-admin.module';
import { SchoolModule } from './admin/school/school.module';
import { GradeModule } from './admin/grade/grade.module';
import { StudentAdminModule } from './admin/student-admin/student-admin.module';
import { LessonAdminModule } from './admin/lesson/lesson-admin.module';
import { LessonStudentModule } from './student/lesson/lesson-student.module';
import { StudentModule } from './student/student/student.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    PrismaModule,
    AdminModule,
    AuthAdminModule,
    SchoolModule,
    GradeModule,
    StudentAdminModule,
    LessonAdminModule,
    LessonStudentModule,
    StudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
