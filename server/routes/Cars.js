const express = require('express')

const CarsSchema = require('../models/Cars')

const router = express();

//Get All
router.get('/api/Cars/', async (req, res) => {
    const findCars = await CarsSchema.find();
    res.json(findCars)
})

//Get Single
router.get('/api/Cars/:id', async (req, res) => {
    const findCars = await CarsSchema.findById(req.params.id);
    res.json(findCars)
})

//Update
router.put('/api/Cars/:id', async (req, res) => {
    const { id } = req.params.id
    await CarsSchema.updateOne({id} , req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})


//Create
router.post('/api/Cars', async (req, res) => {
    const Cars = new CarsSchema({ ...req.body });
    await Cars.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

//Delete
router.delete('/api/Cars/:id', async (req, res) => {
    const { id } = req.params.id
    await CarsSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})


module.exports = router