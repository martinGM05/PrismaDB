class MissionCommander {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.username = data.username;
        this.mainStack = data.mainStack;
        this.currentEnrollment = data.currentEnrollment;
        this.hazAzureCertification = data.hazAzureCertification;
    }
}

module.exports = MissionCommander;