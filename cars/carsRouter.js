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

module.exports = router