const ExplorerService = require("../../lib/services/ExplorerService")
const Explorer = require("../../lib/models/ExplorerModel")

describe("Test for Explorer Service", () => {
    test("1) Test getAllExplorers", async () => {
        const explorers = await ExplorerService.getAllExplorers();
        expect(explorers.length).toBeGreaterThan(0);
    })

    test("2) Test getExplorerById", async () => {
        const id = 1;
        const explorer = await ExplorerService.getExplorerById(id);
        expect(explorer.id).toBe(id);
    })

    test("3) Test createExplorer", async () => {
        const dataExplorer = new Explorer({
            name: "Test",
            username: "test",
            mission: "test"
        });
        const explorer = await prisma.explorer.create({ data: dataExplorer });
        expect(explorer.name).toBe(dataExplorer.name);
    })

    test("4) Test updateExplorer", async () => {
        const id = 1;
        const explorer = await ExplorerService.getExplorerById(id);
        explorer.mission = "test";
        const explorerUpdated = await ExplorerService.updateExplorer(id, explorer);
        expect(explorerUpdated.mission).toBe(explorer.mission);
    })

    test("5) Test deleteExplorer", async () => {
        const id = 1;
        const explorerDelete = await ExplorerService.deleteExplorer(id);
        expect(explorerDelete.message).toBe("Eliminado correctamente");
    })
})