const bcrypt = require("bcrypt");
const zod = require("zod");
const User = require("../models/UserModel");
const Profile = require("../models/ProfileModel");
const jwt = require("jsonwebtoken");
const Blog = require("../models/BlogModel");

function Repository() {}

Repository.createBlog = async (data, userRef) => {
	const schema = zod.object({
		title: zod.string().min(3).max(50),
		description: zod.string().min(3).max(10000),
		image: zod.string().min(3),
	});
	const validation = schema.safeParse(data);
	if (!validation.success) {
		throw new Error(validation.error);
	}
	const newPost = await Blog.create({ ...data, userRef: userRef });
	return newPost;
};

Repository.getBlogById = async (id) => {
	return await Blog.findById(id, { __v: 0, userRef: 0 });
};

Repository.getAllBlog = async () => {
	// TODO: paginate this
	const posts = await Blog.find({}, { __v: 0, userRef: 0 });
	return posts;
};

Repository.deleteBlog = async (id) => {
	const post = await Blog.findById(id, { _id: 1 });
	if (!post) {
		throw new Error("POST_NOT_FOUND");
	}
	await post.deleteOne();
	return post;
};

Repository.createProfile = async (data, userRef) => {
	const schema = zod.object({
		firstName: zod.string().min(3).max(50),
		lastName: zod.string().min(3).max(50),
	});
	const validation = schema.safeParse(data);
	if (!validation.success) {
		throw new Error(validation.error);
	}
	const newProfile = await Profile.create({ ...data, userRef: userRef });
	return newProfile;
};

Repository.checkUser = async (data) => {
	return await User.findOne({ username: data.username });
};

Repository.createUser = async function (user) {
	const schema = zod.object({
		username: zod.string().min(3).max(50),
		password: zod.string().min(8).max(20),
	});
	const validation = schema.safeParse(user);
	if (!validation.success) {
		throw new Error(validation.error);
	}
	const salt = await bcrypt.genSalt(10);
	user.password = await bcrypt.hash(user.password, salt);
	user.salt = salt;
	const newUser = await User.create(user);
	return newUser;
};

Repository.getTokens = function (user) {
	const accessToken = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, {
		expiresIn: "1d",
	});
	const refreshToken = jwt.sign({ id: user._id }, process.env.REFRESH_TOKEN_SECRET, {
		expiresIn: "10d",
	});
	return { accessToken, refreshToken };
};

Repository.verifyToken = function (token) {
	const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
	return decoded;
};

module.exports = Repository;

