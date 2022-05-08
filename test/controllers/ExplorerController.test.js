const ExplorerController = require('../../lib/controllers/ExplorerController')

describe("Test for Explorer Controller", () => {
    test("1) Test getAllExplorers", async () => {
        const explorers = await ExplorerController.getAllExplorers();
        expect(explorers.length).toBeGreaterThan(0);
    })

    test("2) Test getById", async () => {
        const req = {
            params: {
                id: 1
            }
        }
        const explorer = await ExplorerController.getById(req);
        expect(explorer.id).toBe(req.params.id);
    })

    test("3) Test createExplorer", async () => {
        const req = {
            body: {
                name: "Test",
                username: "test",
                mission: "test"
            }
        } 
        const explorer = await ExplorerController.createExplorer(req);
        expect(explorer.message).toBe("Explorer creado.");
    })

    test("4) Test updateExplorer", async () => {
        const req = {
            params: {
                id: 1
            },
            body: {
                name: "Test",
                username: "test",
                mission: "test"
            }
        }
        const explorer = await ExplorerController.getById(req);
        explorer.mission = "test";
    })

    test("5) Test deleteExplorer", async () => {
        const req = {
            params: {
                id: 1
            }
        }
        const explorerDelete = await ExplorerController.deleteExplorer(req);
        expect(explorerDelete.message).toBe("Eliminado correctamente");
    })
})