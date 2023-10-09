const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    CarID: {
        type: String,
        required: true
    },
    Amount: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Order", OrderSchema);
