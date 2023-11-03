const mongoose = require("mongoose")

const uri = `mongodb+srv://todoapp2023:nasiruddin123456@cluster0.5z5stag.mongodb.net/todo?retryWrites=true&w=majority`



const connectDB = async () => {
    try {
        await mongoose.connect(uri)
        console.log("DB connected");

    } catch (error) {
        return console.log(error.message)
    }
}

module.exports = connectDB;