"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 4000;
const middleware = express_1.default.json();
app.use(middleware);
const db = {
    courses: [
        { id: 1, title: 'front-end' },
        { id: 2, title: 'back-end' },
        { id: 3, title: 'SQL' },
        { id: 4, title: 'PYTHON' }
    ]
};
app.get('/courses', (req, res) => {
    let foundCourses = db.courses;
    if (req.query.title) {
        foundCourses = foundCourses.filter(function (c) {
            return c.title.indexOf(req.query.title) > -1;
        });
    }
    res.json(foundCourses);
});
app.get('/courses/:id', (req, res) => {
    const foundCourses = db.courses.find(function (c) {
        return c.id === Number(req.params.id);
    });
    if (!foundCourses) {
        res.sendStatus(404);
        return;
    }
    res.json(foundCourses);
});
app.post('/courses', (req, res) => {
    if (!req.body.title) {
        res.sendStatus(404);
        return;
    }
    const createCourses = {
        id: Number(new Date()),
        title: req.body.title
    };
    db.courses.push(createCourses);
    res.status(201).json(createCourses);
});
app.listen(port, function () {
    console.log(`Server was started at port http://localhost:${port}`);
});
