//User Model
const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name: {
        type: String
    },

    mobile: {
        type: String,
        unique: true,
    },

    email: {
        type: String
    },
    address: {
        street: {
            type: String
        },
        locality: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        pincode: {
            type: String
        },
        coordinatesType: {
            type: String
        },
        coordinates: {
            type: [Number],
        }
    },


})

user.set('timestamps', true);
user.index({ location: "2dsphere" });



module.exports = User = mongoose.model('user', user);
