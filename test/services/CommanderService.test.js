const CommanderService = require("../../lib/services/CommanderService")
const Commander = require("../../lib/models/CommanderModel")

describe("Test for Commander Service", () => {

    test("1) Test getAllCommanders", async () => {
        const commanders = await CommanderService.getAllCommanders();
        expect(commanders.length).toBeGreaterThan(0);
    })

    test("2) Test getCommanderById", async () => {
        const id = 1;
        const commander = await CommanderService.getCommanderById(id);
        expect(commander.id).toBe(id);
    })

})