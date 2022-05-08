const CommanderService = require("../services/CommanderService")
const Commander = require("../models/CommanderModel")

class CommanderController {
    static async getAllCommanders(req, res) {
        const commanders = await CommanderService.getAllCommanders();
        res.status(200).json(commanders);
    }

    static async getCommanderById(req, res) {
        const id = req.params.id;
        const commander = await CommanderService.getCommanderById(id);
        res.status(200).json(commander);
    }
}

module.exports = CommanderController;
