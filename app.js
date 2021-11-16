const express = require("express");
const mongoose = require("mongoose");

const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute");
const categoryRoute = require("./routes/categoryRoute");

const app = express();

//Connect DB
mongoose
	.connect("mongodb://localhost/smartedu")
	.then(() => console.log("DB Connected"));

//Template Engine
app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes

app.use("/", pageRoute);
app.use("/courses", courseRoute);
app.use("/categories", categoryRoute);

const port = 3000;
app.listen(port, () => {
	console.log(`Server started on port: ${port}`);
});
