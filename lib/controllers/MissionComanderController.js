const MissionComanderService = require("../services/MissionComanderService");
const MissionCommander = require("../models/MissionComanderModel");
const { response } = require("express");

const res = response;

class MissionCommanderController {
  
    static getAllMissionCommander = async (_, res) => {
        const missionCommander = await MissionComanderService.getAllMissionCommander();
        res.status(200).json(missionCommander);
    }

    static async getMissionCommanderById(req, res) {
        const id = req.params.id;
        const missionCommander = await MissionComanderService.getMissionCommanderById(id);
        res.status(200).json(missionCommander);
    }

    static async createMissionCommander(req, res) {
        const missionCommander = await MissionComanderService.createMissionCommander(new MissionCommander(req.body));
        res.status(201).json(missionCommander);
    }

    static async updateMissionCommander(req, res) {
        const id = parseInt(req.params.id);
        const missionCommander = await MissionComanderService.updateMissionCommander(id, new MissionCommander(req.body));
        res.status(200).json(missionCommander);
    }

    static async deleteMissionCommander(req, res) {
        const id = parseInt(req.params.id);
        const missionCommander = await MissionComanderService.deleteMissionCommander(id);
        res.status(200).json(missionCommander);
    }

}

module.exports = MissionCommanderController;
