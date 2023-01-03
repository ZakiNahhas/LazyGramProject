
const { UserSchema } = require('../models/userSchema.model');
var bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
module.exports.createUser = (request, response) => {
    UserSchema.create(request.body)
        .then(user => {
            const userToken = jwt.sign({
                id: user._id
            }, a.env.JWT_KEY);

            response
                .cookie("usertoken", userToken, secret, {
                    httpOnly: true
                })
                .json({ msg: "success!", user: user });
        })
        .catch(err => response.status(400).json({ err: err.message }));

}

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_KEY, { expiresIn: '3d' })
}

module.exports.logout = (request, response) => {
    response.clearCookie('usertoken');
    response.sendStatus(200);
}

module.exports.login = async (request, response) => {
    const user = await UserSchema.findOne({ email: request.body.email });

    if (user === null) {
        return response.sendStatus(400);
    }


    const correctPassword = bcrypt.compareSync(request.body.password, user.password);

    if (!correctPassword) {
        // password wasn't a match!
        return response.sendStatus(400);
    }

    // if we made it this far, the password was correct
    const userToken = jwt.sign({
        id: user._id
    }, process.env.JWT_KEY
    );

    // note that the response object allows chained calls to cookie and json
    response
        .cookie("usertoken", userToken, {
            httpOnly: true
        })
        .json({ msg: "success!" });
}

module.exports.getAllUsers = (request, response) => {
    UserSchema.find({})
        .then(Projects => response.json(Projects))
        .catch(err => response.json(err))
}

module.exports.loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await UserSchema.login(email, password)
        const token = createToken(user._id)
        const payload = {
            user: user,
        };
        res.status(200).json({ user, token })
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports.reg = async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body
    try {
        const user = await UserSchema.signup(firstName, lastName, email, password, confirmPassword)
        res.status(200).json({ email, user })
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports.getUser = (request, response) => {
    UserSchema.findOne({ _id: request.params.id })
        .then(Post => response.json(Post))
        .catch(err => response.json(err))
}
module.exports.follow = (req, res) => {
    UserSchema.findByIdAndUpdate(req.body.followId,{
        $push:{followers: req.params.id}
    },{
        new:true
    },(err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }
        UserSchema.findByIdAndUpdate(req.params.id,{
          $push:{following:req.body.followId}
          
      },{new:true}).then(result=>{
          res.json(result)
      }).catch(err=>{
          return res.status(422).json({error:err})
      })

    }
    )
}
module.exports.unfollow = (req, res) => {
    UserSchema.findByIdAndUpdate(req.body.unfollowId,{
        $pull:{followers:req.params.id}
    },{
        new:true
    },(err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }
        UserSchema.findByIdAndUpdate(req.params.id,{
          $pull:{following:req.body.unfollowId}
          
      },{new:true}).then(result=>{
          res.json(result)
      }).catch(err=>{
          return res.status(422).json({error:err})
      })

    }
    )
}

