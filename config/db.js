const { MongoClient } = require("mongodb");

let client;
let db;

// ✅ Correct Skillora URI and DB name
const uri = "mongodb+srv://hazel:root1234@cluster0.amwrb.mongodb.net/";
const dbName = "Skillora";

function connectDB() {
  client = new MongoClient(uri);
  return client
    .connect()
    .then(() => {
      console.log("✅ MongoDB connected to Skillora database");
      db = client.db(dbName);
    })
    .catch((err) => {
      console.error("❌ MongoDB connection error:", err.message);
      process.exit(1);
    });
}

function getDB() {
  if (!db) {
    throw new Error("Database not initialized. Call connectDB first.");
  }
  return db;
}

module.exports = { connectDB, getDB };
