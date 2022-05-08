const ExplorerController = require("../lib/controllers/ExplorerController")
const CommanderController = require("../lib/controllers/CommanderController")

const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Explorers
app.get('/explorers', async (req, res) => {
    const explorers = await ExplorerController.getAllExplorers();
    res.status(200).json(explorers);
});

app.get('/explorers/:id', async (req, res) => {
    const explorer = await ExplorerController.getExplorerById(req);
    res.status(200).json(explorer);
});

app.post('/explorers', async (req, res) => {
    const explorer = await ExplorerController.createExplorer(req);
    res.status(201).json(explorer);
});

app.put('/explorers/:id', async (req, res) => {
    const explorer = await ExplorerController.updateExplorer(req);
    res.status(200).json(explorer);
});

app.delete('/explorers/:id', async (req, res) => {
    const explorer = await ExplorerController.deleteExplorer(req);
    res.status(200).json(explorer);
});


// Commanders

app.get('/commander', async (req, res) => {
    const commanders = await CommanderController.getAllCommanders();
    res.status(200).json(commanders);
});

app.get('/commander/:id', async (req, res) => {
    const commander = await CommanderController.getCommanderById(req);
    res.status(200).json(commander);
});

app.post('/commander', async (req, res) => {
    const commander = await CommanderController.createCommander(req);
    res.status(201).json(commander);
});

app.put('/commander/:id', async (req, res) => {
    const commander = await CommanderController.updateCommander(req);
    res.status(200).json(commander);
});

app.delete('/commander/:id', async (req, res) => {
    const commander = await CommanderController.deleteCommander(req);
    res.status(200).json(commander);
});

app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});