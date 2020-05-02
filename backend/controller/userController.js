const User = require('../models/user');

module.exports = {
    getUsers: (req, res) => {
        User.find()
            .then(users => res.send(users))
            .catch(err => console.log(err))
    },
    addUser: (req, res) => {
        const { name, email } = req.body;
        const newUser = new User({
            name: name, email: email
        })
        newUser.save()
            .then(() => res.send({
                message: "Created account successfully"
            }))
            .catch(err => res.status(400).send({
                "error": err,
                "message": "Error creating account"
            }))
    }
    // getUsers: async (req, res) => {
    //     try {
    //         const users = User.find()
    //         return res.send(users)
    //     } catch (error) {
    //         console.log(error)
    //     }


    // },
    // addUser: async (req, res) => {
    //     const { name, email } = req.body;
    //     const newUser = new User({
    //         name: name, email: email
    //     })
    //     try {
    //         await newUser.save()
    //         await res.send({
    //             message: "Created account successfully"
    //         })
    //     } catch (error) {
    //         await res.status(400).send({
    //             "error": err,
    //             "message": "Error creating account"
    //         })
    //     }

    // }
}