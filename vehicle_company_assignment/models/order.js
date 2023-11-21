const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  orderNumber: {
    type: String, // Change the data type to String
    unique: true,
  },
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "item",
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
    ref: "deliveryVehicle",
  },
  isDelivered: {
    type: Boolean,
    default: false,
  },
});

OrderSchema.pre("save", async function (next) {
  try {
    const highestOrder = await OrderModel.findOne({}, {}, { sort: { orderNumber: -1 } });

    let newOrderNumber = "0001"; // Default initial order number

    if (highestOrder) {
      const lastOrderNumber = parseInt(highestOrder.orderNumber, 10);
      const nextOrderNumber = lastOrderNumber + 1;
      newOrderNumber = nextOrderNumber.toString().padStart(4, "0");
    }

    this.orderNumber = newOrderNumber;
    next();
  } catch (error) {
    next(error);
  }
});

const OrderModel = mongoose.model("Order", OrderSchema);
module.exports = {
  OrderModel,
};
