require("dotenv").config();

const app = require("../server/src/app.js")

const PORT = 8000

app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`)
})