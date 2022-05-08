const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
    res.json({ message: 'alive' });
});

app.get('/explorers', async (req, res) => {
    const allExplorers = await prisma.explorer.findMany({});
    res.json(allExplorers);
});

app.get('/explorers/:id', async (req, res) => {
    const id = req.params.id;
    const explorer = await prisma.explorer.findUnique({ where: { id: parseInt(id) } });
    res.json(explorer);
});

app.post('/explorers', async (req, res) => {
    const explorer = {
        name: req.body.name,
        username: req.body.username,
        mission: req.body.mission
    };
    const message = 'Explorer creado.';
    await prisma.explorer.create({ data: explorer });
    return res.json({ message });
});

app.put('/explorers/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    await prisma.explorer.update({
        where: {
            id: id
        },
        data: {
            mission: req.body.mission
        }
    })

    return res.json({ message: "Actualizado correctamente" });
});

app.delete('/explorers/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await prisma.explorer.delete({ where: { id: id } });
    return res.json({ message: "Eliminado correctamente" });
});


// DB Test

app.get('/commander', async (req, res) => {
    const allCommanders = await prisma.comanders.findMany({});
    res.json(allCommanders);
});

app.get('/commander/:id', async (req, res) => {
    const id = req.params.id;
    const commander = await prisma.comanders.findUnique({ where: { id: parseInt(id) } });
    res.json(commander);
});

app.post('/commander', async (req, res) => {
    const commander = {
        name: req.body.name,
        lange: req.body.lange,
        missionCommander: req.body.missionCommander,
        enrollments: req.body.enrollments,
    };
    const message = 'Commander creado.';
    await prisma.comanders.create({ data: commander });
    return res.json({ message });
});

app.put('/commander/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    await prisma.comanders.update({
        where: {
            id: id
        },
        data: {
            mission: req.body.mission
        }
    })

    return res.json({ message: "Actualizado correctamente" });
});

app.delete('/commander/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await prisma.comanders.delete({ where: { id: id } });
    return res.json({ message: "Eliminado correctamente" });
});

app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});