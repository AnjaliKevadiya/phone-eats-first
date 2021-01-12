const db = require("../models");

//Defining methods for the postsController
module.exports = {
    findAll: function(req, res) {
        db.Post
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch (err => res.status(422).json(err));
    }
}