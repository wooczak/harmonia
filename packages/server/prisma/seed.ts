import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    // Create doctors
    const doctor1 = await prisma.doctor.create({
      data: {
        name: 'Dr. Smith',
      },
    });

    const doctor2 = await prisma.doctor.create({
      data: {
        name: 'Dr. Johnson',
      },
    });

    // Create patients with references to doctors
    await prisma.patient.create({
      data: {
        name: 'John Doe',
        doctor: {
          connect: { id: doctor1.id },
        },
      },
    });

    await prisma.patient.create({
      data: {
        name: 'Jane Doe',
        doctor: {
          connect: { id: doctor2.id },
        },
      },
    });

    console.log('Seed data created successfully.');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedDatabase();
