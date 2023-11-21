const mongoose = require("mongoose");

const deliveryVehicleSchema = new mongoose.Schema({
    registrationNumber: {
        type: String,
        required: true,
        unique: true,
        match: /^[A-Za-z0-9]+$/, // Alphanumeric pattern
    },
    vehicleType: {
        type: String,
        enum: ["bike", "truck"],
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    activeOrdersCount: {
        type: Number,
        default: 0,
        max: 2,
    },
});

const DeliveryVehicleModel = mongoose.model("deliveryVehicle", deliveryVehicleSchema);

module.exports = {
    DeliveryVehicleModel,
};


