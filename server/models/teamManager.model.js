const mongoose = require('mongoose');
const Projects = new mongoose.Schema({
    name: { type: String,
    minlength: [2,"name must be at least 2 char."]

    },
    date: { type: Date
        },
    status: 
        { stat: Number}
   
        
}, { timestamps: true });
module.exports.Project = mongoose.model('Projects', Projects);