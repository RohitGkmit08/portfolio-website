const express = require("express");
const contactRoutes = require("./routes/contact");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("server is running")
})

app.use("/api/contact", contactRoutes);

module.exports = app;
