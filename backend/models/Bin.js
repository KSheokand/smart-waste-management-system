const mongoose = require('mongoose');

const binSchema = new mongoose.Schema({
    location: { type: String, required: true },
    fillLevel: { type: Number, default: 0 }, // percentage: 0 to 100
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    coordinates: {
        lat: Number,
        lng: Number
    },
    lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Bin', binSchema);
