const mongoose = require("mongoose");

const ShareSchema = new mongoose.Schema({
	blog: {
		type: mongoose.Schema.Types.ObjectIdj,
		ref: "Blog",
		required: true,
	},
	accessPermissions: {
		enum: ["view", "edit"],
		required: true,
	},
	userRef: [
		{
			ref: "User",
			required: true,
		},
	],
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Share", ShareSchema);

