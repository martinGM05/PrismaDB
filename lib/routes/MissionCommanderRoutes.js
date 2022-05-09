const { Router } = require("express");
const MissionCommanderController = require("../controllers/MissionComanderController");

const router = Router();

router.get("/", MissionCommanderController.getAllMissionCommander);
router.get("/:id", MissionCommanderController.getMissionCommanderById);
router.post("/", MissionCommanderController.createMissionCommander);
router.put("/:id", MissionCommanderController.updateMissionCommander);
router.delete("/:id", MissionCommanderController.deleteMissionCommander);



module.exports = router;