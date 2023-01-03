const mongoose = require('mongoose');

const Post = new mongoose.Schema({
    content: { type: String,
    minlength: [2,"content must be at least 15 char."]

    },
    photo: {
        type: String
    },
   
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserSchema"
    },
  showCommand:{
    type: Boolean,
    default:false
  },
  liked:{type:Boolean,default:false},
  like: {
    type: Number,
    default:0
  }
        
}, { timestamps: true });
module.exports.Post = mongoose.model('Posts', Post);