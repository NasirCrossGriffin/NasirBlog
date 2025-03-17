const express = require("express");
const mongoose = require('mongoose');
const blog = require('./controller/blog-entry-controller');
const admin = require('./controller/admin-controller');
const app = express();
const session = require("express-session");
const MongoStore = require('connect-mongo');
const cors = require('cors')
require('dotenv').config();

const port = 3000;

app.use(session({
    secret : process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave : false,
    cookie: { 
        secure: false,
        sameSite: 'lax',
        maxAge: 604800000
     },
     genid: function(req) {
        return  require('crypto').randomUUID();
      },
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URL
    })
}))

app.use(cors({
    origin : "http://localhost:4200",
    credentials : true
}))

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        
        app.use(express.json());

        app.use('/api', blog);

        app.use('/api', admin)

        app.listen(port, () => {
            console.log("Sever listening on port " + port)
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the process if DB connection fails
    }
}

main();