import mongoose from "mongoose";
 
const ShoppingItemSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    bought: {
        type: Boolean,
        default: false
    },
    createdAt: {
      type: Date,
      default: Date.now,
      immutable: true
    }
});

const ShoppingItemModel = mongoose.model("ShoppingItem", ShoppingItemSchema);

export default ShoppingItemModel;

