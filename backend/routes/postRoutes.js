const UserController = require("../controller/userController");
const Router = require("express").Router();
const PostController = require("../controller/postController");

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

Router.post("/", PostController.createPost);

module.exports = Router;

