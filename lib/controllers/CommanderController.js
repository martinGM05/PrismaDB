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

    static async createCommander(req, res) {
        const message = await CommanderService.createCommander(new Commander(req.body));
        res.status(201).json(message);
    }

    static async updateCommander(req, res) {
        const id = parseInt(req.params.id);
        const commander = await CommanderService.updateCommander(id, new Commander(req.body));
        res.status(200).json(commander);
    }

    static async deleteCommander(req, res) {
        const id = parseInt(req.params.id);
        const commander = await CommanderService.deleteCommander(id);
        res.status(200).json(commander);
    }
}

module.exports = CommanderController;
