import { Test, TestingModule } from '@nestjs/testing';
import { AdminService } from './admin.service';
import { PrismaService } from '../prisma/prisma.service';

describe('AdminService', () => {
  let admin: AdminService;

  const mockPrismaService = {
    admin: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AdminService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    admin = module.get<AdminService>(AdminService);
  });

  it('should be defined', () => {
    expect(admin).toBeDefined();
  });
});
