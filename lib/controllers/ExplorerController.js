const ExplorerService = require("../services/ExplorerService")
const Explorer = require("../models/ExplorerModel")

class ExplorerController {
    static getAllExplorers = async () =>
        await ExplorerService.getAllExplorers();

    static async getById(req) {
        const id = req.params.id;
        return await ExplorerService.getExplorerById(id);
    }

    static async createExplorer(req) {
        return await ExplorerService.createExplorer(new Explorer(req.body));
    }
    static async updateExplorer(req) {
        const id = parseInt(req.params.id);
        return await ExplorerService.updateExplorer(id, new Explorer(req.body));
    }

    static async deleteExplorer(req) {
        const id = parseInt(req.params.id);
        return ExplorerService.deleteExplorer(id);
    }
}

module.exports = ExplorerController;
