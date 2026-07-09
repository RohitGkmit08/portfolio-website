require("dotenv").config();

const app = require("./src/app.js");
const connectDb = require("./src/config/db.js");

const PORT = process.env.PORT || 8080;

const startServer = async () => {
    await connectDb();

    app.listen(PORT, "0.0.0.0", () => {
        console.log(`app is running on port ${PORT}`);
    });
};
startServer();
