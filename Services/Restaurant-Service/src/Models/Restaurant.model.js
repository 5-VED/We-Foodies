const { Schema, model } = require('mongoose');
const baseFieldsSchema = require('./BaseFields.model');
const { FOOD_TYPE } = require('../Constants/enums');

const restaurantSchema = new Schema(
    {
        name: {
            type: Schema.Types.String,
            required: true
        },
        restaurant_image: {
            type: Schema.Types.String,
            required: true
        },
        contact_no: {
            type: Schema.Types.String,
            required: true
        },
        food_type: {
            type: Schema.Types.String,
            enum: [FOOD_TYPE.NON_VEG, FOOD_TYPE.VEG],
            default: FOOD_TYPE.BOTH
        },
        cusines: [{
            type: Schema.Types.ObjectId,
            required: true
        }],
        restaurant_address: [
            {
                type: Schema.Types.ObjectId,
                ref: "Outlet"
            }
        ],
        FSSAI_no: {
            type: Schema.Types.String,
            required: true
        },
        FSSAI_valid_upto: {
            type: Schema.Types.Date,
            required: true
        },
        GST_no: {
            type: Schema.Types.String,
            required: true
        },
        PAN_no: {
            type: Schema.Types.String,
            required: true
        },
        account_nuber: {
            type: Schema.Types.String,
            required: true
        },
        IFSC_no: {
            type: Schema.Types.String,
            required: true
        },
        balance: {
            type: Schema.Types.String,
            required: true
        },
        card_no: {
            type: Schema.Types.String,
            required: true
        },
        CVC: {
            type: Schema.Types.String,
            required: true
        },
        slug: {
            type: Schema.Types.String,
            required: true
        },
        ...baseFieldsSchema.obj
    }, {
    collection: "Restaurant_Master"
}
);

const Restaurant = model('Restaurant', restaurantSchema);

module.exports = Restaurant;
