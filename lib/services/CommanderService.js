const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class CommanderService {

    static getAllCommanders = async () => await prisma.comanders.findMany({});

    static getCommanderById = async (id) => {
        return await prisma.comanders.findUnique({
            where: { id: parseInt(id) }
        });
    }

    static createCommander = async (dataCommander) => {
        const commander = await prisma.comanders.create({
            data: dataCommander
        })
        return {
            message: 'Commander creado.',
            commander
        }
    }

    static updateCommander = async (id, commander) => {
        const commanderUpdated = await prisma.comanders.update({
            where: { id },
            data: commander
        })
        return {
            message: "Actualizado correctamente"
        }
    }

    static deleteCommander = async (id) => {
        await prisma.comanders.delete({
            where: { id }
        })
        return { message: "Eliminado correctamente" }
    }

}

module.exports = CommanderService;