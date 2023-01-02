const { Comment } = require('../models/Comment.model');
const jwt = require("jsonwebtoken");


module.exports.createComment = (request, response) => {

    const user_id = request.body.user_id;
    const post_id = request.body.post_id;

    const comment = request.body.comment;
    // const photo = request.file.filename;

    const newCommentData = {
        comment,
        user_id,
        post_id,
       
    }
    const newComment = new Comment(newCommentData);
    newComment.save(newCommentData)
        .then(Comment => response.json(Comment))
        .catch(err => response.status(400).json(err));
    // Post.create(
    //     request.body
    //     )
    //         .then(Post => response.json(Post))
    //         .catch(err => response.status(400).json(err));
}

module.exports.getAllComment = (request, response) => {
    Comment.find({})
    .populate("user_id" , "firstName")
        .then(Comment => response.json(Comment))
        .catch(err => response.json(err))
}
module.exports.getComment = (request, response) => {
    Comment.findOne({_id:request.params.id})
        .then(Post => response.json(Post))
        .catch(err => response.json(err))
}

module.exports.updateComment = (request, response) => {
    Comment.findOneAndUpdate({_id: request.params.id}, request.body, {
        new: true,
        runValidators: [true, "{PATH} is required"],
      })
        .then(updatedComment => response.json(updatedComment))
        .catch(err => response.status(400).json(err));
}
module.exports.deleteComment = (request, response) => {
    Comment.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

