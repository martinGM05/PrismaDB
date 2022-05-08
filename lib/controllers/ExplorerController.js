const ExplorerService = require("../services/ExplorerService");
const Explorer = require("../models/ExplorerModel");
const { response } = require("express");

const res = response;

class ExplorerController {
    static getAllExplorers = async (_, res) => {
        const explorers = await ExplorerService.getAllExplorers();
        res.status(200).json(explorers);
    };

    static async getExplorerById(req, res) {
        const id = req.params.id;
        const explorer = await ExplorerService.getExplorerById(id);
        res.status(200).json(explorer);
    }

    static async createExplorer(req, res) {
        const explorer = await ExplorerService.createExplorer(new Explorer(req.body));
        res.status(201).json(explorer);
    }
    static async updateExplorer(req) {
        const id = parseInt(req.params.id);
        const explorer = await ExplorerService.updateExplorer(id, new Explorer(req.body));
        res.status(200).json(explorer);
    }

    static async deleteExplorer(req, res) {
        const id = parseInt(req.params.id);
        const explorer = await ExplorerService.deleteExplorer(id);
        res.status(200).json(explorer);
    }
}

module.exports = ExplorerController;
