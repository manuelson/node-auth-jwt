const User = require('../models/user.model');

exports.getByEmail = (req, res) => {
    const email = req.params.email;
    User.findByEmail(email.trim(), (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    status: 'error',
                    message: `User with email ${email} was not found`
                });
                return;
            }
            res.status(500).send({
                status: 'error',
                message: err.message
            });
            return;
        }
        if (data) {
            res.status(200).send({
                status: 'success',
                data: {
                    firstname: data.firstname,
                    lastname: data.lastname,
                    email: data.email
                }
            });
        }
    });
}
