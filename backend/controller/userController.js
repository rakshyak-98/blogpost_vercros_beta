const Repository = require("../lib/repository");
const CONFIG = require("../config");

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
			username: req.body.email,
			password: req.body.password,
		});
		res.status(201).send(Repository.generateToken(newUser));
	} catch (error) {
		res.status(400).send(error.message);
	}
};

UserController.checkUserToken = async function (req, res, next) {
	if (!req.headers.hasOwnProperty("authorization")) {
		res.status(401).send("AUTHORIZATION_HEADER_NOT_FOUND");
		return;
	}
	const token = req.headers["authorization"].split("Bearer ")[1];
	if (!token) {
		res.status(401).send("TOKEN_NOT_FOUND");
		return;
	}
	try {
		const decode = Repository.verifyToken(token);
		req.userData = decode;
	} catch (error) {
		res.status(401).send(error.message);
		return;
	}
	next();
};

module.exports = UserController;

