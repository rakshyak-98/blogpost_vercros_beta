const Router = require("express").Router();
const UserController = require("../controller/userController");

Router.post("/signUp", UserController.createUser);
Router.post("/signIn", UserController.signIn);

Router.post("/profile", UserController.checkUserToken, UserController.createProfile)

module.exports = Router;
