import { Test, TestingModule } from '@nestjs/testing';
import { AdminService } from './admin.service';
import { StudentService } from './student.service';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('AuthService', () => {
  let service: AuthService;
  let prisma: PrismaService;

  const mockAdminService = {
    getAdminFromEmail: jest.fn(),
  };

  const mockStudentService = {
    getStudentFromEmail: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: AdminService,
          useValue: mockAdminService,
        },
        {
          provide: StudentService,
          useValue: mockStudentService,
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
