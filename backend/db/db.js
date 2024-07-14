// const mongoose = require('mongoose');

// const db = async () => {
//     try {
//         mongoose.set('strictQuery', false)
//         await mongoose.connect(process.env.MONGO_URL)
//         console.log('Db Connected')
//     } catch (error) {
//         console.log('DB Connection Error');
//     }
// }

// module.exports = {db}

const mongoose = require("mongoose");

const connectToDatabase = async () => {
const mongoDbUrl = process.env.MONGODB_URL;

if (!mongoDbUrl) {
    console.error(
    "No MongoDB url provided. Make sure there is a MONGODB_URL environment variable set. See the README for more details."
    );
    throw new Error("No connection string provided");
}

await mongoose.connect(mongoDbUrl);

if (process.env.NODE_ENV !== "test") {
    console.log("Successfully connected to MongoDB");
}
};

module.exports = { connectToDatabase };