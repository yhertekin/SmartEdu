const mongoose = require("mongoose");
const slugify = require("slugify");

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
	category: {
		type: mongoose.Schema.type.ObjectId,
		ref: "Category",
	},
	slug: {
		type: String,
		required: true,
	},
});

CourseSchema.pre("validate", function (next) {
	this.slug = slugify(this.name, {
		lower: true,
		strict: true,
	});
	next();
});

const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;
