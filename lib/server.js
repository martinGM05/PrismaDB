const express = require('express');

const ExplorerRoute = require('./routes/ExplorerRoutes')
const CommanderRoute = require('./routes/CommanderRoutes')

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.use("/explorers", ExplorerRoute)
app.use("/commanders", CommanderRoute)


app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});