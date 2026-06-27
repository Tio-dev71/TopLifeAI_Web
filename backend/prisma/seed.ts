import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // Seed Super Admin
  const adminPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@toplifeai.com' },
    update: {},
    create: {
      email: 'admin@toplifeai.com',
      firstName: 'System',
      lastName: 'Admin',
      password: adminPassword,
      role: Role.SUPER_ADMIN,
    },
  });
  console.log(`Admin user created: ${admin.email}`);

  // Seed Test User
  const testPassword = await bcrypt.hash('test1234', 10);
  const testUser = await prisma.user.upsert({
    where: { email: 'test@toplifeai.com' },
    update: {},
    create: {
      email: 'test@toplifeai.com',
      firstName: 'Test',
      lastName: 'User',
      password: testPassword,
      role: Role.PATIENT,
    },
  });
  console.log(`Test user created: ${testUser.email}`);

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
