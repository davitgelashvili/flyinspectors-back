const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
    pasportImage: {
        type: String,
        required: true,
    },
    ticketImage: {
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
    fightNumber: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("client", ClientSchema);
