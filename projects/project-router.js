const router = require('express').Router();
const Projects = require('./project-model.js');

router.get('/', (req, res) => {
    Projects.find()
        .then(project => {
             res.json(project);
         })
         .catch(err => res.send(err));
});

module.exports = router;