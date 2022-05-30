const Article = require("../constructors/constructor");




// Create and Save Article -------------------------------------------------------------------
exports.create = (req, res) => {
  
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  
  // For Create Article in MySQL
  const articles = new Article({
    article: req.body.article,
    mksa: req.body.mksa,
    score1: req.body.score1,
    score2: req.body.score2,
    score3: req.body.score3
  });
  
  // Save Article in the database
  Article.create(articles, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Oh no, Some error occurred while creating Article :'( "
      });
    else res.send(data);
  });
};     



// Show Article (ALL, by ID, and latest ----------------------------------------------------------------

// Retrieve all from the database .

exports.findAll = (req, res) => {
  const title = req.query.title;
  Article.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving articles."
      });
    else res.send(data);
  });
};

// Retrieve all from the database .
exports.findTheLatest = (req, res) => {
  Article.getTheLatest((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

// Retrieve Tutorials from the database (with id).
exports.findOne = (req, res) => {
  Article.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Article with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Article with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// update with id

exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  Article.updateById(
    req.params.id,
    new Article(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Article with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Article with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// delete by id

exports.delete = (req, res) => {
  Article.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Article with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Article with id " + req.params.id
        });
      }
    } else res.send({ message: `Article was deleted successfully!` });
  });
};

// delete all DANGER

exports.deleteAll = (req, res) => {
  Article.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all articles."
      });
    else res.send({ message: `All Artic-less were deleted successfully :D ` });
  });
};