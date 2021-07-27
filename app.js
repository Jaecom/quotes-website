const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/quoteWebsite",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
})

app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(express.static('public'));


const quotesRouter = require("./routes/quotes");
const apiRouter = require("./routes/api")

app.use("/", quotesRouter);
app.use("/api", apiRouter);


const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

