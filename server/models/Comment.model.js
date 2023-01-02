const mongoose = require('mongoose');

const Comment = new mongoose.Schema({
    comment: { type: String,
    minlength: [2,"Comment must be at least 15 char."]

    },
   
   post_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Posts"
   },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserSchema"
    },
  
        
}, { timestamps: true });
module.exports.Comment = mongoose.model('Comment', Comment);