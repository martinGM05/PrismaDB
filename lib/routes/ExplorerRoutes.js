const { Router } = require("express");
const ExplorerController = require("../controllers/ExplorerController");

const router = Router();

router.get("/", ExplorerController.getAllExplorers);
router.get("/:id", ExplorerController.getExplorerById);
router.post("/", ExplorerController.createExplorer);
router.put("/:id", ExplorerController.updateExplorer);
router.delete("/:id", ExplorerController.deleteExplorer);



module.exports = router;