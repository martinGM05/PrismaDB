const ExplorerService = require("../services/ExplorerService");
const Explorer = require("../models/ExplorerModel");


class ExplorerController {
    static getAllExplorers = async (_, res) => {
        const explorers = await ExplorerService.getAllExplorers();
        res.status(200).json(explorers);
    };

    static getExplorerById = async (req, res) => {
        const id = req.params.id;
        const explorer = await ExplorerService.getExplorerById(id);
        res.status(200).json(explorer);
    }

    static createExplorer = async(req, res) => {
        const explorer = await ExplorerService.createExplorer(new Explorer(req.body));
        res.status(201).json(explorer);
    }
    static updateExplorer = async(req, res) => {
        const id = parseInt(req.params.id);
        const explorer = await ExplorerService.updateExplorer(id, req.body.mission);
        res.status(200).json(explorer);
    }

    static deleteExplorer = async (req, res) => {
        const id = parseInt(req.params.id);
        const explorer = await ExplorerService.deleteExplorer(id);
        res.status(200).json(explorer);
    }
}

module.exports = ExplorerController;
