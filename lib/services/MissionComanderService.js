const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class MissionCommanderService {

    static getAllMissionCommander = async () => await prisma.missionCommander.findMany({});        

    static getMissionCommanderById = async (idUser) => {
        return await prisma.missionCommander.findUnique({ where: { id: parseInt(idUser) } });
    };

    static createMissionCommander = async (data) => {
        const mCommander = await prisma.missionCommander.create({ data });
        return {
            message: "Mission Commander creado.",
            mCommander
        };
    };

    static updateMissionCommander = async (id, mCommander) => {
        await prisma.missionCommander.update({
            where: { id },
            data: mCommander
        });
        return {
            message: "Actualizado correctamente"
        };
    };

    static deleteMissionCommander = async (id) => {
        await prisma.missionCommander.delete({ where: { id } });
        return { message: "Eliminado correctamente" };
    };
}

module.exports = MissionCommanderService;