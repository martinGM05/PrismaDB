const express = require("express");
const cors = require("cors");
const ExplorerRoute = require("./routes/ExplorerRoutes");
const CommanderRoute = require("./routes/CommanderRoutes");
const MissionCommanderRoute = require("./routes/MissionCommanderRoutes");

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

const corsOptions = {
    origin: "*",
};

app.use(cors(corsOptions));
app.use("/explorers", ExplorerRoute);
app.use("/commanders", CommanderRoute);
app.use("/missionCommander", MissionCommanderRoute)


app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});