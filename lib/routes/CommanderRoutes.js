const { Router } = require("express");
const CommanderController = require("../controllers/CommanderController");

const router = Router();

router.get("/", CommanderController.getAllCommanders);
router.get("/:id", CommanderController.getCommanderById);
router.post("/", CommanderController.createCommander);
router.put("/:id", CommanderController.updateCommander);
router.delete("/:id", CommanderController.deleteCommander);


module.exports = router;