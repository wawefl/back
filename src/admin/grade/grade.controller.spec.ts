import { Test, TestingModule } from '@nestjs/testing';
import { GradeService } from '../../services/grade.service';
import { GradeController } from './grade.controller';

describe('GradeController', () => {
  let controller: GradeController;
  let mockedGradeService;

  beforeEach(async () => {
    mockedGradeService = {
      getAll: jest.fn(),
      getGrade: jest.fn(),
      createGrade: jest.fn(),
      updateGrade: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GradeController],
      providers: [
        {
          provide: GradeService,
          useValue: mockedGradeService,
        },
      ],
    }).compile();

    controller = module.get<GradeController>(GradeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
