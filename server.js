const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3222;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});


//Require each route below for use:
app.use(require("./routes/api-routes.js"))
app.use(require("./routes/html-routes.js"))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

module.exports = app;
