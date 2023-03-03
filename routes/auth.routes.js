const router = require("express").Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { isAuthenticated } = require("../error-handling/middlewares/jwt.middleware");
const User = require("../models/User.model");

router.get("/", (req, res, next) => {
  res.json("Auth working");
});


//Signup
router.post("/signup", async(req, res) => {
    
    //Hash password
    const salt = bcrypt.genSaltSync(13)
    const hashedPassword = bcrypt.hashSync(req.body.password, salt)
    //Create User
await User.create({username: req.body.username, passwordHash:hashedPassword})

    res.status(201).json({message:'User created successfully'})
  });
//Login
router.post('/login', async(req,res) => {
    //check for username
    const matchedUsers = await User.find({username: req.body.username})
    if(matchedUsers.length){
        const currentUser = matchedUsers[0]
        //check for password
        if(bcrypt.compareSync(req.body.password, currentUser.passwordHash)){
            //generate JWT
            const token = jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                data: {user: {username: currentUser.username}}
              }, 
              process.env.TOKEN_SECRET
              )

            res.json({token})
        }else{
            res.status(403).json({message:'Incorrect password'})
        }
    }else{
        res.status(404).json({message:'User not found'})
    }
})

//Verify
router.post('/verify', isAuthenticated , (req,res) => {
   if(req.payload) {
    res.json(req.payload.data.user)
   } 
})



module.exports = router;