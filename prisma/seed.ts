import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding ...');

  const districts = [
    {
      name: 'Central City',
      latitude: 23.0225,
      longitude: 72.5714,
      thresholds: {
        rainThreshold: 50.0, // mm
        riverThreshold: 10.0, // meters
      },
    },
    {
      name: 'North Valley',
      latitude: 28.7041,
      longitude: 77.1025,
      thresholds: {
        rainThreshold: 45.0,
        riverThreshold: 8.5,
      },
    },
    {
      name: 'Coastal Bay',
      latitude: 19.0760,
      longitude: 72.8777,
      thresholds: {
        rainThreshold: 60.0,
        riverThreshold: 5.0,
      },
    },
    {
      name: 'Eastern Highlands',
      latitude: 22.5726,
      longitude: 88.3639,
      thresholds: {
        rainThreshold: 55.0,
        riverThreshold: 12.0,
      },
    },
    {
      name: 'Southern Delta',
      latitude: 13.0827,
      longitude: 80.2707,
      thresholds: {
        rainThreshold: 70.0,
        riverThreshold: 7.0,
      },
    },
  ];

  for (const d of districts) {
    const district = await prisma.district.create({
      data: {
        name: d.name,
        latitude: d.latitude,
        longitude: d.longitude,
      },
    });

    // Create thresholds for the district
    await prisma.alertThreshold.create({
      data: {
        districtId: district.id,
        rainThreshold: d.thresholds.rainThreshold,
        riverThreshold: d.thresholds.riverThreshold,
        severityLevel: 'High', // Setting a base high threshold for now
      },
    });

    // Add a medium threshold (example logic: 70% of high)
    await prisma.alertThreshold.create({
      data: {
        districtId: district.id,
        rainThreshold: d.thresholds.rainThreshold * 0.7,
        riverThreshold: d.thresholds.riverThreshold * 0.7,
        severityLevel: 'Medium',
      },
    });
    
    console.log(`Created district: ${district.name} with thresholds`);
  }

  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
