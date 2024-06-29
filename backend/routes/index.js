const Router = require("express").Router();
const UserController = require("../controller/userController");
const PostRoutes = require('./postRoutes');

Router.post("/signUp", UserController.createUser);
Router.post("/signIn", UserController.signIn);

Router.post("/profile", UserController.checkUserToken, UserController.createProfile)
Router.use("/post", PostRoutes)

module.exports = Router;
