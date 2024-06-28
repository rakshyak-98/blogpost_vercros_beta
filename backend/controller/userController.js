const Repository = require("../lib/repository");

function UserController() {}

UserController.createProfile = async function (req, res) {
	try {
		const newProfile = await Repository.createProfile(req.body, req.userData.id);
		res.status(201).send(newProfile);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

UserController.signIn = async function (req, res) {
	try {
		const user = await Repository.checkUser(req.body);
		res.status(200).send(Repository.getTokens(user));
	} catch (error) {
		res.status(400).send(error.message);
	}
};

UserController.createUser = async function (req, res) {
	try {
		const newUser = await Repository.createUser({
			username: req.body.username,
			password: req.body.password,
		});
		res.status(201).send(Repository.generateToken(newUser));
	} catch (error) {
		res.status(400).send(error.message);
	}
};

UserController.checkUserToken = async function (req, res, next) {
	const token = req.headers["authorization"].split("Bearer ")[1];
	const decode = Repository.verifyToken(token);
	req.userData = decode;
	next();
};

module.exports = UserController;

