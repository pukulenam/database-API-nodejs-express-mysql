/*const app = () => {
  const tutorials = require("../controllers/tutorials.controllers");
  var router = require("express").Router();
  // Create a new Tutorial
  router.post("/", tutorials.create);
  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);
  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);
  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);
  // Update a Tutorial with id
  router.put("/:id", tutorials.update);
  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);
  // Delete all Tutorials
  router.delete("/", tutorials.deleteAll);
  app.use('/api/tutorials', router);
} ;

module.exports = app

*/

module.exports = app => {
  const Articles = require("../controllers/controllers");
  var router = require("express").Router();


  // Create a new Article
  router.post("/", Articles.create);

  // Return all Article
  router.get("/", Articles.findAll);
  
  // Return the latest Article
  router.get("/latest", Articles.findTheLatest);

  // Return a single Article with id
  router.get("/:id", Articles.findOne);

  // Update a Article with id
  router.put("/:id", Articles.update);
  
  // Delete a Tutorial with id
  router.delete("/:id", Articles.delete);
  // Delete all Tutorials
  router.delete("/", Articles.deleteAll);



  app.use('/api/articles', router);
};
