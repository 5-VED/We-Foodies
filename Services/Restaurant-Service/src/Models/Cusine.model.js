const { Schema, model } = require('mongoose');
const baseFieldsSchema = require('./BaseFields.model');

const cusineSchema = new Schema(
  {
    restaurant: {
      type: Schema.Types.ObjectId,
      ref: 'Restaurant',
      required: true,
    },
    cusine: {
      type: Schema.Types.String,
      required: true,
    },
    description: {
      type: Schema.Types.String,
      required: true,
    },
    cusine_category: {
      type: Schema.Types.ObjectId,
      default: nulls,
    },
    cusine_image: {
      type: Schema.Types.String,
      required: true,
    },
    cusine_thumbnail: {
      type: Schema.Types.String,
      required: true,
    },
    bookmartk: {
      type: Schema.Types.String,
      default: null,
    },
    rating: {
      type: Schema.Types.String,
      default: null,
    },
    is_best_seller: {
      type: Schea.Types.Boolean,
      default: false,
    },
    amount: {
      type: Schema.Types.Number,
      default: null,
    },
    add_cooking_request: {
      type: Schema.Types.String,
      default: null,
    },
    slug: {
      type: Schema.Types.String,
      required: true,
    },
    ...baseFieldsSchema.obj,
  },
  {
    collation: 'Outlet_Address',
  }
);

const Cusine = model('Cusine', cusineSchema);

module.exports = Cusine;
