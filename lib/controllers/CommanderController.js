const CommanderService = require("../services/CommanderService")
const Commander = require("../models/CommanderModel")

class CommanderController {
    static async getAllCommanders(req) {
        const commanders = await CommanderService.getAllCommanders();
        return commanders;
    }

    static async getCommanderById(req) {
        const id = req.params.id;
        const commander = await CommanderService.getCommanderById(id);
        return commander;
    }

    static async createCommander(req) {
        const message = await CommanderService.createCommander(new Commander(req.body));
        return message;
    }

    static async updateCommander(req) {
        const id = parseInt(req.params.id);
        const commander = await CommanderService.updateCommander(id, new Commander(req.body));
        return commander;
    }

    static async deleteCommander(req) {
        const id = parseInt(req.params.id);
        const commander = await CommanderService.deleteCommander(id);
        return commander;
    }
}

module.exports = CommanderController;
