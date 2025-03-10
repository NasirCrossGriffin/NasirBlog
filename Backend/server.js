const express = require("express");
const mongoose = require('mongoose');
const blog = require('./controller/blog-entry-controller');
const app = express();
const cors = require('cors')
require('dotenv').config();

const port = 3000;

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        
        app.use(cors())
        
        app.use(express.json());

        app.use('/api', blog);

        app.listen(port, () => {
            console.log("Sever listening on port " + port)
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the process if DB connection fails
    }
}

main();