const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const process = require("process");

(async function main() {
    try {
        await prisma.comanders.upsert({
            where: { name: "Juan" },
            update: {},
            create: {
                name: "Juan",
                lang: "English",
                missionCommander: "Rodrigo",
                enrollments: 10,
            },
        });

        await prisma.comanders.upsert({
            where: { name: "Ernesto" },
            update: {},
            create: {
                name: "Ernesto",
                lang: "English",
                missionCommander: "Carlo",
                enrollments: 50,
            },
        });

        await prisma.comanders.upsert({
            where: { name: "Kevin" },
            update: {},
            create: {
                name: "Kevin",
                lang: "French",
                missionCommander: "Fernanda",
                enrollments: 30,
            },
        });

        await prisma.comanders.upsert({
            where: { name: "Jose" },
            update: {},
            create: {
                name: "Jose",
                lang: "German",
                missionCommander: "Carlo",
                enrollments: 30,
            },
        });

        await prisma.comanders.upsert({
            where: { name: "Jocelyn" },
            update: {},
            create: {
                name: "Jocelyn",
                lang: "German",
                missionCommander: "Carlo",
                enrollments: 30,
            },
        });

        console.log("Create 5 explorers");
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();