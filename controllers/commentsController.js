const db = require("../models");

//Defining methods for the commentsController
module.exports = {
    findAll: function(req, res) {
        db.Comment
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}