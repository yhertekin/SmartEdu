const mongoose = require("mongoose");
const { Schema } = mongoose;

const CourseSchema = new Schema({
	name: {
		type: String,
		unique: true,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;
