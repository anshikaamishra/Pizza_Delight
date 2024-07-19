import mongoose, {model, models, Schema} from "mongoose";

const ExtraPriceSchema = new Schema({
  name: String,
  price: Number,
});

const MenuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  basePrice: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId},
  basePrice: {type: Number},
  sizes: {type:[ExtraPriceSchema]},
  extraIngredientPrices: {type:[ExtraPriceSchema]},
}, {timestamps: true});

export const MenuItem = models?.MenuItem || model('MenuItem', MenuItemSchema);

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const MenuItemSchema = new Schema({
//   name: { type: String, required: true },
//   price: { type: Number, required: true },
//   category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
//   // other fields
// });

// module.exports = mongoose.model('MenuItem', MenuItemSchema);
