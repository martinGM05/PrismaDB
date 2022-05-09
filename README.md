# Prisma API - REST

> This is the exercise from LaunchX of the week 5.

## Some libraries were used in this project:

- [Express](https://www.npmjs.com/package/express) - Node.js framework
- [Jest](https://jestjs.io/) - for testing
- [Eslint](https://eslint.org/) - for code style checking
- [Prisma](https://www.prisma.io/) - for database
- [Cors](https://github.com/expressjs/cors) - for CORS

If you want to download the project don't forget to run **`npm i`** to install the necessary dependencies

There are some scripts in the package.json to speed up some commands:
```javascript
"scripts": {
    "test": "node ./node_modules/jest/bin/jest.js",
    "start": "node lib/server.js",
    "seed": "node prisma/seed.js",
    "linter": "node ./node_modules/eslint/bin/eslint.js .",
    "linter-fix": "node ./node_modules/eslint/bin/eslint.js . --fix"
},
```

- `npm run test` = To run the tests
- `npm run start` = To stand up the server
- `npm run seed` = To insert data into the database
- `npm run linter` = To examine the code according to the rules imposed in the .eslintrc.js file
- `npm run linter-fix` = To resolve errors according to the rules

## The logic distribution of this api is like this
```mermaid
graph TD;
    Database --> Prisma
    Prisma --> ExplorerService
    Prisma --> CommanderService
    Prisma --> MissionCommanderService
    ExplorerModel --> ExplorerController;
    ExplorerService-->ExplorerController;
    MissionCommanderService-->MissionCommanderController;
    MissionCommanderModel --> MissionCommanderController;
    MissionCommanderController --> MissionCommanderRoutes
    CommanderService-->CommanderController;
    CommanderModel --> CommanderController;
    CommanderController-->CommanderRoutes;
    ExplorerController-->ExplorerRoutes;
    ExplorerRoutes-->Server;
    MissionCommanderRoutes-->Server;
    CommanderRoutes-->Server;
```

## These are the available **endpoints**.
| Endpoint | Description | Body |
|---|---|---|
| `http://localhost:3000/explorers` | Get the list of explorers | |
| `http://localhost:3000/explorers/:id` | Get the explorer by id | |
| `http://localhost:3000/explorers` | Post a new explorer | { name: "Woopa", username: "ajolonauta",mission: "Node" } |
| `http://localhost:3000/explorers/:id` | Update an explorer | { name: "Woopa", username: "ajolonauta",mission: "Java" } |
| `http://localhost:3000/explorers/:id` | Delete an explorer | |
| `http://localhost:3000/commanders` | Get the list of commanders | |
| `http://localhost:3000/commanders/:id` | Get the commander by id | |
| `http://localhost:3000/commanders` | Post a new commander | { name: "Juan", lang: "English", missionCommander: "Rodrigo", enrollments: 10, } |
| `http://localhost:3000/commanders/:id` | Update an commander | { name: "Juan", lang: "English", missionCommander: "Carlo", enrollments: 10, } |
| `http://localhost:3000/commanders/:id` | Delete an commander | |
| `http://localhost:3000/missionCommander` | Get the list of mission commanders | |
| `http://localhost:3000/missionCommander/:id` | Get the mission commander by id | |
| `http://localhost:3000/missionCommander` | Post a new mission commander | { "name": "Rodolfo", "username": "rodoFerro", "mainStack": "Python", "currentEnrollment": false, "hasAzureCertification": true } |
| `http://localhost:3000/missionCommander/:id` | Update an mission commander | { "name": "Rodolfo", "username": "rodoFerro", "mainStack": "Python", "currentEnrollment": false, "hasAzureCertification": true } |
| `http://localhost:3000/missionCommander/:id` | Delete an mission commander | |

## Demo
### Explorers
![Demo-API-Explorers](https://user-images.githubusercontent.com/63875704/167350759-76a98cae-67a8-4246-a3d4-d792b129e61e.gif)

### Commanders
![DEMO-API-Commanders](https://user-images.githubusercontent.com/63875704/167350792-fcd2ffab-663f-4ebf-b003-3feb5823b755.gif)

### Missions Commanders
![DEMO-API-MissionCommanders](https://user-images.githubusercontent.com/63875704/167350837-a1135044-5cf3-43b5-8f18-8be46c0eff83.gif)
