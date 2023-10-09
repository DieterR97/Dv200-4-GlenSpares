const express = require('express');
const OrderSchema = require('../models/orders');
const CarSchema = require('../models/carParts');

const router = express.Router();

// Read all orders
router.get('/api/orders', async (req, res) => {
    try {
        const orders = await OrderSchema.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/api/order', async (req, res) => {
    try {
        // Assuming req.body is an array of cart items
        const cartItems = req.body;

        // Map cart items to the format expected by the Order model
        const orders = cartItems.map(item => ({
            CarID: item._id,  // Adjust this based on your model
            Amount: 1,  // Adjust this based on your model
        }));

        // Save orders to the database
        await OrderSchema.insertMany(orders);

        res.json({ message: 'Order placed successfully' });
    } catch (error) {
        console.error('Error during order creation:', error);
        res.status(500).json({ error: 'Failed to create order' });
    }
});

// Delete a order
router.delete('/api/order/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await OrderSchema.findByIdAndDelete(id);
        res.json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
