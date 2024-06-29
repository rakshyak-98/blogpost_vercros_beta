const Repository = require("../lib/repository");
function PostController() {}

PostController.getPostById = async (req, res) => {
	try {
		const post = await Repository.getPostById(req.params.id);
		res.status(200).send(post);
	} catch (error) {
		res.status(400).send(error.message);
		return;
	}
};

PostController.getAllPost = async (req, res) => {
	try {
		const posts = await Repository.getAllPost();
		res.status(200).send(posts);
	} catch (error) {
		res.status(400).send(error.message);
		return;
	}
};

PostController.createPost = async (req, res) => {
	try {
		const post = await Repository.createPost(req.body, req.userData.id);
		res.status(201).send({
			id: post._id,
			description: post.description,
			image: post.image,
		});
	} catch (error) {
		res.status(400).send(error.message);
		return;
	}
};

PostController.deletePost = async (req, res) => {
	try {
		const post = await Repository.deletePost(req.params.id);
		res.status(200).send(post);
	} catch (error) {
		res.status(400).send(error.message);
		return;
	}
};

module.exports = PostController;

