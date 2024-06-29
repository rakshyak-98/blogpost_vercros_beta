const mongoose = require("mongoose");

const ShareSchema = new mongoose.Schema({
	blog: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Blogs",
		required: true,
	},
	accessPermission: {
		type: String,
		required: true,
		enumValues: ["view", "edit"],
	},
	userRef: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	],
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Share", ShareSchema);

