require('dotenv').config();
const mongoose = require("mongoose");


const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://admin:RL2VIz6VM4sN0DZU@cluster0.iuhvwbp.mongodb.net/local_library?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // ... other options
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;