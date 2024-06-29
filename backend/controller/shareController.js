const Repository = require("../lib/repository");
function ShareController() {}

ShareController.createShare = async function (req, res) {
	try {
		const newShare = await Repository.createShare(req.body);
		res.status(201).send({
			id: newShare._id,
			userRef: newShare.userRef,
			accessPermissions: newShare.accessPermission,
		});
	} catch (error) {
		res.status(400).send(error.message);
	}
};

ShareController.getBlogSharedWithMe = async function (req, res) {
	try {
		const share = await Repository.getBlogShareWithMe(req.userData.id);
		res.status(200).send(share);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = ShareController;

