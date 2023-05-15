import { Prisma } from '@prisma/client';

export enum RoleAdmin {
  'DEFAULT',
  'SECRETARY',
  'ACCOUNTING',
  'ASSISTANT',
  'TRAINER',
  'TEACHER',
  'DIRECTOR',
}

export type CreateAdminDto = Prisma.AdminCreateInput;
