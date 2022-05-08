class Commander {
    constructor(data) {
        this.name = data.name;
        this.lang = data.lang;
        this.missionCommander = data.missionCommander;
        this.enrollments = data.enrollments;
        this.hasCertification = data.hasCertification;
    }
}

module.exports = Commander;