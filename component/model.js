const mongoose = require("mongoose")

const schemaStructure = mongoose.Schema({
    item:{
        type: String,
        required: true,
        unique: [true, "This item already exist"]
    },
    price:{
        type: String,
        required: true,
        unique: [true, "please check the figure"]
    },
    measurement:{
        type: Number,
        required: true,
        unique:["pls check the measurement"]
    }
})

module.exports = mongoose.model("stocks", schemaStructure)