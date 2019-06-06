const router = require('express').Router();

const Recipe = require('./recipe_model')

router.get('/', (req, res) => {
    Recipe.find()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json("Server Error")
    })
})

module.exports = router;