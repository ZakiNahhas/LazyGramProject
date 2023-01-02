const ProjectCont = require('../controllers/teamManager.controller');
const UserCont = require('../controllers/user.controllers');
const PostCont = require('../controllers/Post.controllers');
const CommentController = require('../controllers/Comment.controllers');

const { authenticate } = require('../config/jwt.config');

const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });

module.exports = function(app){
    app.post('/api/Project', ProjectCont.createProject);
    app.post('/api/user', UserCont.createUser);
    app.post('/api/user/reg', UserCont.reg);

    app.get('/api/logout', UserCont.logout);
    app.post('/api/login', UserCont.loginUser);
    app.get("/api/users", authenticate, UserCont.getAllUsers);



    app.get('/api/Projects', ProjectCont.getAllProjects);
    app.get('/api/Project/:id', ProjectCont.getProject);
    app.put('/api/Project/:id', ProjectCont.updateProject);
    app.delete('/api/Project/:id', ProjectCont.deleteProject);



    app.post('/api/Post', upload.single('photo'),PostCont.createPost);
    app.get('/api/Posts', PostCont.getAllPosts);
    app.get('/api/Post/:id', PostCont.getPost);
    app.put('/api/Post/:id', PostCont.updatePost);
    app.delete('/api/Post/:id', PostCont.deletePost);
    
    
    app.get('/api/Comment', CommentController.getAllComment);
    app.post('/api/Comment', CommentController.createComment);
    app.get('/api/Comment/:id', CommentController.getComment);
    app.put('/api/Comment/:id', CommentController.updateComment);
    app.delete('/api/Comment/:id', CommentController.deleteComment);

}