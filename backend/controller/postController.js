const Repository = require("../lib/repository");
function PostController() {}

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

module.exports = PostController;

