const UserController = require("../controller/userController");
const Router = require("express").Router();
const BlogController = require("../controller/blogController");

function verifyUserToken(req, res, next) {
	if (!req.userData.id) {
		res.status(401).send("UNAUTHORIZED");
		return;
	} else {
		next();
	}
}

Router.use(UserController.checkUserToken);
Router.use(verifyUserToken);

Router.post("/", BlogController.createPost);
Router.delete("/:id", BlogController.deletePost);
Router.get("/", BlogController.getAllPost);
Router.get("/:id", BlogController.getPostById);

module.exports = Router;

