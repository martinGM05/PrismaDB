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
        console.log(explorer)
        expect(explorer.id).toBe(id);
    })
})