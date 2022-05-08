const ExplorerService = require("../../lib/services/ExplorerService")

describe("Test for Explorer Service", () => {
    test("1) Test getAllExplorers", async () => {
        const explorers = await ExplorerService.getAllExplorers();
        expect(explorers.length).toBeGreaterThan(0);
    })
})