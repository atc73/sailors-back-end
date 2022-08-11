const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DATABASE)
        console.log("MongoDB Connected")
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB