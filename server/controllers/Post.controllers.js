const { Post } = require('../models/Post.model');
const jwt = require("jsonwebtoken");



module.exports.createPost = (request, response) => {
//   const post = new Post(request.body)
// const decodeJwt = jwt.decode(request.cookies.user)
// post.user_id = decodeJwt.user._id
    const content = request.body.content;
    const user_id = request.body.user_id;
    const photo = request.file.filename;

    const newPostData = {
        content,
        user_id,
        photo
    }
    const newPost = new Post(newPostData);
    newPost.save(newPostData)
    .then(Post => response.json(Post))
        .catch(err => response.status(400).json(err));
// Post.create(
//     request.body
//     )
//         .then(Post => response.json(Post))
//         .catch(err => response.status(400).json(err));
}

module.exports.getAllPosts = (request, response) => {
    Post.find({})
    .populate("user_id" , "firstName")
        .then(Posts => response.json(Posts))
        .catch(err => response.json(err))
}
module.exports.getPost = (request, response) => {
    Post.findOne({_id:request.params.id})
        .then(Post => response.json(Post))
        .catch(err => response.json(err))
}

module.exports.updatePost = (request, response) => {
    Post.findOneAndUpdate({_id: request.params.id}, request.body, {
        new: true,
        runValidators: [true, "{PATH} is required"],
      })
        .then(updatedPost => response.json(updatedPost))
        .catch(err => response.status(400).json(err));
}
module.exports.deletePost = (request, response) => {
    Post.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}



