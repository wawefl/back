import { Test, TestingModule } from '@nestjs/testing';
import { AdminService } from './admin.service';
import { StudentService } from './student.service';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

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
          provide: StudentService,
          useValue: mockStudentService,
        },
        {
          provide: AdminService,
          useValue: mockAdminService,
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
