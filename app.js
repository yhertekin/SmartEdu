const express = require("express");

const pageRouter = require("./routes/pageRoute");

const app = express();

//Template Engine
app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));

//Routes

app.use("/", pageRouter);

const port = 3000;
app.listen(port, () => {
	console.log(`Server started on port: ${port}`);
});
