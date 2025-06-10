const { Schema, model } = require('mongoose');
const baseFieldsSchema = require('./BaseFields.model');
const { FOOD_TYPE } = require('../Constants/enums');

const restaurantSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
    },
    restaurant_image: {
      type: Schema.Types.String,
      required: true,
    },
    thumbnail: {
      type: Schema.Types.String,
      required: true,
    },
    contact_no: {
      type: Schema.Types.String,
      required: true,
    },
    food_type: {
      type: Schema.Types.String,
      enum: [FOOD_TYPE.NON_VEG, FOOD_TYPE.VEG],
      default: FOOD_TYPE.BOTH,
    },
    // cusines: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     required: true,
    //   },
    // ],
    outlet: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Outlet',
      },
    ],
    FSSAI_no: {
      type: Schema.Types.String,
      required: true,
    },
    FSSAI_valid_upto: {
      type: Schema.Types.Date,
      required: true,
    },
    GST_no: {
      type: Schema.Types.String,
      required: true,
    },
    PAN_no: {
      type: Schema.Types.String,
      required: true,
    },
    slug: {
      type: Schema.Types.String,
    },
    operating_hours: [
      { day: Schema.Types.String, open: Schema.Types.String, close: Schema.Types.String }
    ],
    website: {
      type: Schema.Types.String,
      required: true
    },
    total_rating: {
      type: Schema.Types.Number,
      default: 0,
      min: 0
    },
    ...baseFieldsSchema.obj,
  },
  {
    collection: 'Restaurant_Master',
  }
);

const Restaurant = model('Restaurant', restaurantSchema);

module.exports = Restaurant;
