const mongoose = require('mongoose');

const plant68Schema = mongoose.Schema({
    name: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    stationNumber: {
        type: Number
    },
    stationName: {
        type: String
    },
    ct1: {
        type: Number
    },
    ct2: {
        type: Number
    },
    ct3: {
        type: Number
    },
    ct4: {
        type: Number
    },
    ct5: {
        type: Number
    },
    avgCt: {
        type: Number
    },
    numberOfStation: {
        type: Number
    },
    numberOfDevices: {
        type: Number
    },
    numberOfManPower: {
        type: Number
    },
    numberOfMachine: {
        type: Number
    },
    finalAvgCt: {
        type: Number
    },
    uph100%: {
        type: Number
    },
    uph90%: {
        type: Number
    },
    remarks: {
        type: Number
    }
});

module.exports = mongoose.model("plant68", plant68Schema);