import { District, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function check() {
  try {
    const districts: District[] = await prisma.district.findMany();
    console.log(`Successfully imported District type. Found ${districts.length} districts.`);
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}

check();
