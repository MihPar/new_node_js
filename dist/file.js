"use strict";
// const db = {
//     courses: [
//         {id: 1, title: 'front-end'},
//         {id: 2, title: 'back-end'},
//         {id: 3, title: 'SQL'},
//         {id: 4, title: 'PYTHON'}
//     ]
// }
// app.get('/courses', (req, res) => {
//     let foundCourses = db.courses
//     if(req.query.title) {
//         foundCourses = foundCourses.filter(function(c) {
//             return c.title.indexOf(req.query.title as string) > -1
//         })
//     }
//     res.json(foundCourses)
// })
// app.get('/courses/:id', (req, res) => {
//     const foundCourses = db.courses.find(function(c) {
//         return c.id === Number(req.params.id)
//     })
//     if(!foundCourses) {
//         res.sendStatus(404)
//         return 
//     }
//     res.json(foundCourses)
// })
// app.post('/courses', (req, res) => {
//     if(!req.body.title) {
//         res.sendStatus(404)
//         return
//     }
//     const createCourses = {
//         id: Number(new Date()),
//         title: req.body.title
//     }
//     db.courses.push(createCourses)
//     res.status(201).json(createCourses)
// })
// app.delete('/courses/:id', function(req, res) {
//     db.courses = db.courses.filter(function(c) {
//         return c.id !== +req.params.id
//     })
//     res.sendStatus(204)
// })
// app.put('/courses/:id', function(req, res) {
//     if(!req.body.title) {
//         res.sendStatus(404)
//         return 
//     }
//     const foundCourses = db.courses.find(function(c) {
//         return c.id === Number(req.params.id)
//     })
//     if(!foundCourses) {
//         res.sendStatus(404)
//         return 
//     }
//     foundCourses.title = req.body.title
//     res.sendStatus(204)
// })
// app.get('/', function(req: Request, res: Response) {
//     res.send('<h1>I am the samuray of back-end developer</h1>')
// })
