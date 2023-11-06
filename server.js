const express = require("express")
const connectDB = require("./db")
const cors = require("cors");
require("dotenv").config()
connectDB();
const noteRouter = require("./routes/note");
const app = express();
const port = 5000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    res.send("Hello ToDo")
})

//imported router available here
app.use("/api/note", noteRouter)

app.listen(port, () => {
    console.log(`App is running listening at https://localhost:${port}`);
})