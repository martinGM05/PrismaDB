const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
        username: 'ajolonauta',
        mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
        username: 'ajolonauta1',
        mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
        username: 'ajolonauta2',
        mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
        username: 'ajolonauta3',
        mission: 'Node'
      },
    });

    const woopa4 = await prisma.explorer.upsert({
      where: { name: 'Woopa 4' },
      update: {},
      create: {
        name: 'Woopa 4',
        username: 'ajolonauta4',
        mission: 'Node'
      },
    })

    const Cwoopa = await prisma.comanders.upsert({
      where: { name: 'Juan' },
      update: {},
      create: {
        name: "Juan",
        lang: "English",
        missionCommander: "Rodrigo",
        enrollments: 10,
      },
    });

    const Cwoopa1 = await prisma.comanders.upsert({
      where: { name: 'Ernesto' },
      update: {},
      create: {
        name: "Ernesto",
        lang: "English",
        missionCommander: "Carlo",
        enrollments: 50,
      },
    });

    const Cwoopa2 = await prisma.comanders.upsert({
      where: { name: 'Kevin' },
      update: {},
      create: {
        name: "Kevin",
        lang: "French",
        missionCommander: "Fernanda",
        enrollments: 30,
      },
    });

    const Cwoopa3 = await prisma.comanders.upsert({
      where: { name: 'Jose' },
      update: {},
      create: {
        name: "Jose",
        lang: "German",
        missionCommander: "Carlo",
        enrollments: 30,
      },
    });

    const Cwoopa4 = await prisma.comanders.upsert({
      where: { name: 'Jocelyn' },
      update: {},
      create: {
        name: "Jocelyn",
        lang: "German",
        missionCommander: "Carlo",
        enrollments: 30,
      },
    })

    console.log('Create 3 explorers');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();