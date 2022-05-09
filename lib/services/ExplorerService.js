const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ExplorerService {

    static getAllExplorers = async () => await prisma.explorer.findMany({});        

    static getExplorerById = async (idUser) => {
        try {
            return await prisma.explorer.findUnique({ where: { id: parseInt(idUser) } });
        } catch (error) {
            return null;
        }
    };

    static createExplorer = async (dataExplorer) => {
        const explorer = await prisma.explorer.create({ data: dataExplorer });
        return {
            message: "Explorer creado.",
            explorer
        };
    };

    static updateExplorer = async (id, explorer) => {
        const result = await prisma.explorer.update({
            where: { id },
            data: {
                mission: explorer
            }
        });
        return {
            message: "Actualizado correctamente",
            result
        };
    };

    static deleteExplorer = async (idUser) => {
        await prisma.explorer.delete({ where: { id: idUser } });
        return { message: "Eliminado correctamente" };
    };
}

module.exports = ExplorerService;