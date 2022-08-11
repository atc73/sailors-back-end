const express = require('express')
const router = express.Router()
const Sailor = require('../models/SailorModel')




// Get all sailors
router.get('/', async (req, res) => {
    try {
        const sailors = await Sailor.find()
        res.status(200).json(sailors)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.post('/', async (req, res) => {
    const sailor = new Sailor({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })

    try {
        const newSailor = await sailor.save()
        res.status(201).json(newSailor)
    } catch (err) {
        console.log(sailor)
        res.status(400).json({ message: err.message})
    }
})

router.patch('/:id', async (req, res) => {
    const sailorToUpdate = await Sailor.findById(req.params.id) 
    
    if (req.body.firstName !== sailorToUpdate.firstName) {
        sailorToUpdate.firstName = req.body.firstName
    }

    if (req.body.lastName !== sailorToUpdate.lastName) {
        sailorToUpdate.lastName = req.body.lastName
    }

    try {
        const sailorUpdated = await sailorToUpdate.save()
        res.json(sailorUpdated)

    } catch (err) {
        return res.status(500).json({ message: err.message})
    }
    
})

router.delete('/:id', async (req, res) => {
    try  {
        await Sailor.findById(req.params.id).deleteOne()
        res.json({ message: "Marin supprimé"})
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }
})
 
module.exports = router