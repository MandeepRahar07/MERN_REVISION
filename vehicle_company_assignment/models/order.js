const mongoose = require("mongoose");
// const AutoIncrement = require("mongoose-sequence")(mongoose);

const OrderSchema = new mongoose.Schema({
  orderNumber: {
    type: Number,
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

// Define a pre-hook to generate the incremental order number
// OrderSchema.plugin(AutoIncrement, { id: "order_number_seq", inc_field: "orderNumber" });
OrderSchema.pre("save", async function (next) {
  try {
    // Find the maximum order number in the collection
    const highestOrder = await OrderModel.findOne({}, {}, { sort: { orderNumber: -1 } });

    let newOrderNumber = "0001"; // Default initial order number

    if (highestOrder) {
      // Increment the last order number and format it with leading zeros
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
