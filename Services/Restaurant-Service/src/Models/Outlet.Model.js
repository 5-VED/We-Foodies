const { Schema, model } = require('mongoose');
const baseFieldsSchema = require('./BaseFields.model');

const outletSchema = new Schema(
    {
        owned_by: {
            type: Schema.Types.String,
            required: true
        },
        outlet_manager: {
            type: Schema.Types.String,
            required: true
        },        
        outlet_email: {
            type: Schema.Types.String,
            required: true
        },
        outlet_phone: {
            type: Schema.Types.String,
            required: true
        },
        city: {
            type: Schema.Types.String,
            required: true
        },
        state: {
            type: Schema.Types.String,
            required: true
        },
        line1: {
            type: Schema.Types.String,
            require: true
        },
        line2: {
            type: Schema.Types.String,
            require: true
        },
        area: {
            type: Schema.Types.String,
            require: true
        },
        address: {
            type: Schema.Types.String,
            require: true
        },
        zip_code: {
            type: Schema.Types.String,
            require: true
        },
        location: {
            type: {
                type: Schema.Types.String,
                enum: ['Point'],
                required: true
            },
            coordinates: {
                type: [Number], // [longitude, latitude]
                required: true
            }
        },
        ...baseFieldsSchema.obj
    },
    {
        collation: 'Outlet_Address',
    }
);

const Outlet = model('Outlet', outletSchema)

module.exports = Outlet;
