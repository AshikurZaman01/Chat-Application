
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const dotenv = require('dotenv');
dotenv.config();

//database connection
const connecDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_CONNECTION_URL)
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Could not connect to MongoDB', err);
        process.exit(1);
    }
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.listen(port, () => {
    connecDB();
    console.log(`Server is running on port ${port}`);
});