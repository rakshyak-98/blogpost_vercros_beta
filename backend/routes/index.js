const Router = require("express").Router();
const UserController = require("../controller/userController");
const BlogRoutes = require("./blogRoutes");

Router.post("/signUp", UserController.createUser);
Router.post("/signIn", UserController.signIn);
Router.post("/profile", UserController.checkUserToken, UserController.createProfile);
Router.get("/auth", UserController.checkUserToken);
Router.use("/blog", BlogRoutes);

module.exports = Router;