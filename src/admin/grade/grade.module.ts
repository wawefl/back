import { Module } from '@nestjs/common';
import { GradeController } from './grade.controller';
import { GradeService } from '../../services/grade.service';

@Module({
  providers: [GradeService],
  controllers: [GradeController],
})
export class GradeModule {}
