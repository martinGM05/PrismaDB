const MissionCommander = require("../../lib/services/MissionComanderService")

describe("Test for MissionCommander", () => {
    test("1) Test getAllMissionCommander", async () => {
        const missionCommander = await MissionCommander.getAllMissionCommander();
        expect(missionCommander.length).toBeGreaterThan(0);
    })

    test("2) Test getById", async () => {
        const id = 1;
        const missionCommander = await MissionCommander.getMissionCommanderById(id);
        expect(missionCommander.id).toBe(id);
    })
})