const router = require('express').Router();

const Dish = require('./dish_model')

router.get('/', (req, res) => {
    Dish.getDishes()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json("Server Error")
    })
})

router.post('/', (req, res) => {
    if(req.body.name) {
        Dish.addDish(req.body)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({message: "Server Error", err: error})
        })
    }
    else {
        res.status(400).json("Please provide a cohort name.")
    }
})

module.exports = router;