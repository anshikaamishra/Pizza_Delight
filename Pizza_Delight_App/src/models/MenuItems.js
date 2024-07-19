import mongoose,{ model, models, Schema } from "mongoose";

const ExtraPriceSchema = new Schema({
    name: String, 
    price: Number,
});

const MenuItemsSchema = new Schema({
    image: {type: String},
    name: { type: String, required: true },
  description: { type: String, required: true },
  basePrice: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId},
    sizes: {type:[ExtraPriceSchema]},
    extraIngredientPrices: {type:[ExtraPriceSchema]},
}, {timestamps: true});

export const MenuItems = models?.MenuItems || model('MenuItems', MenuItemsSchema);