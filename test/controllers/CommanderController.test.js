const CommanderController = require('../../lib/controllers/CommanderController')

describe("Test for Commander Controller", () => {
    test("1) Test getAllCommanders", async () => {
        const commanders = await CommanderController.getAllCommanders();
        expect(commanders.length).toBeGreaterThan(0);
    })

    test("2) Test getById", async () => {
        const req = {
            params: {
                id: 1
            }
        }
        const commander = await CommanderController.getCommanderById(req);
        expect(commander.id).toBe(req.params.id);            
    })
})