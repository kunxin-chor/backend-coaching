const mongoose = require('mongoose');

const faultSchema = new mongoose.Schema({
    title: {type: String, required: true},
    location: {type: String, required: true},
    tags: {
         type: [String],
         validate: v => Array.isArray(v) && v.length > 0
    },
    block: {type:Number, required: true},
    reporter_name: {type: String },
    reporter_email: {type: String, required: true},
    resolved: {type:Boolean, default:false}
})

module.exports = mongoose.model("Fault", faultSchema);