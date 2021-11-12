const User = require('../users/users-model');

const registerPayload = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            res.status(400).json({
                message: "username and password required"
            })
        } else {
            next()
        }
    } catch(err) {
        next(err);
    }
}

const checkUsernameTaken = async (req, res, next) => {
    try {
        const possibleUser = await User.findBy({
            username: req.body.username
        })
        console.log("Possible User: ", possibleUser);
        if (possibleUser.length) {
            res.status(400).json({
                message: "username taken"
            })
            
        } else {
            next()
        }

    } catch(err) {
        next(err);
    }
}
const checkUsernameExists = async (req, res, next) => {
    try {
     const users = await User.findBy({ username: req.body.username})
     console.log(users)
     if (users) {
       next()
     } else {
       next({ status: 401, message: "Invalid credentials"})
     }
    } catch (err) {
      next(err)
    }
   }

module.exports = {
    checkUsernameTaken,
    registerPayload,
    checkUsernameExists
}


