console.log('Cars')

const express = require('express')
const knex = require('knex')

const knexConfig = require('../knexfile')

const db = knex(knexConfig.development)

const router = express.Router()

router.get('/', async (req, res) => {
    try{
    const cars = await db('cars');
    res.json(cars)
    } catch (err) {
        res.status(500).json({message: 'Failed'})
    }
})

// if(!VIN || !make || !model || !mileage || !transmission_type || !title_status){
//     res.status(500).json({message: 'Missing info'})
// } else {

router.post('/', async(req, res) => {
    try{
    const carBody = req.body
    const [id] = await db('cars').insert(carBody)
    const newCar = await db('cars').where({id})

    res.status(201).json(newCar)
    } catch (err) {
    console.log = ('Post error', err);
    res.status(500).json({message: 'Failed to store data'})
    }
})


module.exports = router