const UserController = require("../controller/userController");
const Router = require("express").Router();
Router.use(UserController.checkUserToken);

Router.post("/", PostController.createPost);

module.exports = Router;
