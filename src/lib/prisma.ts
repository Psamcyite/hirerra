import { PrismaClient } from '@prisma/client';

declare global {
  // Declaring a global variable to hold the Prisma client in development mode
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  // In development, store Prisma client in global object to prevent hot-reload issues
  global.prisma = prisma;
}

export default prisma;
