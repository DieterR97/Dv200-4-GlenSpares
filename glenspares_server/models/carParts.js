const mongoose = require('mongoose');

const CarPartSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    CarMake: {
        type: String,
        required: true
    },
    CarModel: {
        type: String,
        required: true
    },
    ChasisNumber: {
        type: Number,
        required: true
    },
    Year: {
        type: Number,
        required: true
    },
    PartID: {
        type: String,
        required: true
    },
    Stock: {
        type: Number,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("CarPart", CarPartSchema);
