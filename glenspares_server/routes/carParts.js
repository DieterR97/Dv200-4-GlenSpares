const express = require('express');
const CarPartSchema = require('../models/carParts');
const router = express.Router();

//Create car part
router.post('/api/carpart', async (req, res) => {
    const carpart = new CarPartSchema({ ...req.body })
    await carpart.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

// Read all car parts
router.get('/api/carparts', async (req, res) => {
    try {
        const carparts = await CarPartSchema.find();
        res.json(carparts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read a single car part
router.get('/api/carpart/:id', async (req, res) => {
    try {
        const carpart = await CarPartSchema.findById(req.params.id);
        res.json(carpart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a car part
router.put('/api/carpart/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await CarPartSchema.findByIdAndUpdate(id, req.body);
        res.json({ message: 'Car part updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a car part
router.delete('/api/carpart/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await CarPartSchema.findByIdAndDelete(id);
        res.json({ message: 'Car part deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update stock when a purchase happens
router.post('/api/carpart/purchase/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body; // Assuming you provide the quantity in the request body

        // Fetch the car part by ID
        const carpart = await CarPartSchema.findById(id);

        // Check if the car part exists
        if (!carpart) {
            return res.status(404).json({ message: 'Car part not found' });
        }

        // Check if there is enough stock
        if (carpart.Stock < quantity) {
            return res.status(400).json({ message: 'Insufficient stock for purchase' });
        }

        // Update the stock
        carpart.Stock -= quantity;

        // Save the updated car
        await carpart.save();

        res.json({ message: 'Purchase successful', updatedCarpart: carpart });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
