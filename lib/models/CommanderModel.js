class Commander {
    constructor(req) {
        this.name = req.name;
        this.lang = req.lang;
        this.missionCommander = req.missionCommander;
        this.enrollments = req.enrollments;
        this.hasCertification = req.hasCertification;
    }
}

module.exports = Commander;
