const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    ShortId: {
        type: String,
        unique: true,
        required:true,
    },
    RedirectURL: {
        type: String,
        required: true,
    },
    clickcounter:{
    type:Number,
    default:0,
    }
});

const URL = mongoose.model('URL', urlSchema);
module.exports =URL;
