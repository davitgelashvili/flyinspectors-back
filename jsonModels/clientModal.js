const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
    passportImage: {
        type: String,
        required: true,
    },
    ticketImage: {
        type: String,
        required: true,
    },
    otherImage: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    problem: {
        type: String,
        required: true,
    },
    flightNumber: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    select: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("client", ClientSchema);
