let User = require('../model/user')
const bcrypt = require('bcrypt');

//for create data
let register = async (req, res) => {
    let { email, name, password } = req.body;
    console.log(email, name, password)

    const salt = await bcrypt.genSalt(10);
     password = await bcrypt.hashSync(password, salt);

    //create instatnce of user (insert data into connection)
    let user = new User({ email, name, password })
    await user.save()
    res.send(user)
}

let login = async (req, res) => {
    let { inp_email, inp_password } = req.body
    let user = await User.findOne({ email: inp_email, password: inp_password });
    console.log(user);

    if (!user) {
        res.status(400).send("User Not Found !!")
    }
    else {
        res.status(200).json(user)
    }
}

//for read data

let profile = async (req, res) => {
    const user = await User.findOne({ "email": req.body.email })
    res.status(200).json(user)
}



module.exports = {
    login,
    register,
    profile
}