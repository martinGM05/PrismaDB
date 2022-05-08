const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class ExplorerService {

    static getAllExplorers = async () => await prisma.explorer.findMany({});        

    static getExplorerById = async (idUser) => {
        return await prisma.explorer.findUnique({ where: { id: parseInt(idUser) } });
    }

    static createExplorer = async (dataExplorer) => {
        const explorer = await prisma.explorer.create({ data: dataExplorer });
        return {
            message: 'Explorer creado.',
            explorer
        }
    }

    static updateExplorer = async (id, explorer) => {
        await prisma.explorer.update({
            where: { id },
            data: {
                mission: explorer.mission
            }
        })
        return {
            message: "Actualizado correctamente"
        }
    }

    static deleteExplorer = async (idUser) => {
        await prisma.explorer.delete({ where: { id: idUser } });
        return { message: "Eliminado correctamente" }
    }
}

module.exports = ExplorerService;