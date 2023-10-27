const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const OrderSchema = new mongoose.Schema({
  orderNumber: {
    type: Number,
    unique: true,
  },
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "item", // Replace "Item" with the actual model name for items
  },
  price: {
    type: Number,
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer",
  },
  deliveryVehicleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "deliveryVehicle", // Replace "DeliveryVehicle" with the actual model name for delivery vehicles
  },
  isDelivered: {
    type: Boolean,
    default: false,
  },
});

// Define a pre-hook to generate the incremental order number
OrderSchema.plugin(AutoIncrement, { id: "order_number_seq", inc_field: "orderNumber" });

const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = {
  OrderModel,
};
