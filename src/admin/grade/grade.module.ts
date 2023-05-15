import { Module } from '@nestjs/common';
import { GradeController } from './grade.controller';
import { GradeService } from 'src/services/grade.service';

@Module({
  providers: [GradeService],
  controllers: [GradeController],
})
export class GradeModule {}
