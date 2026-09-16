import mongoose from "mongoose";

/**
 * Connects to MongoDB.
 *
 * If MONGO_URI is set in the environment, that (real, persistent) database is
 * used. Otherwise an in-memory MongoDB instance is started automatically via
 * mongodb-memory-server so the whole app runs with zero database setup — the
 * trade-off is that data resets whenever the server restarts. Set MONGO_URI
 * in backend/.env once you want data to actually persist (a local `mongod`,
 * or a free MongoDB Atlas cluster).
 */
export async function connectDB() {
  let uri = process.env.MONGO_URI;

  if (!uri) {
    console.log("⚠️  MONGO_URI not set — trying to start a temporary in-memory MongoDB...");
    console.log("   (downloads a small MongoDB binary the first time; needs internet access)");
    try {
      const { MongoMemoryServer } = await import("mongodb-memory-server");
      const mem = await MongoMemoryServer.create();
      uri = mem.getUri();
      console.log("✅ In-memory MongoDB started. Data will NOT persist across restarts.");
      console.log("   Set MONGO_URI in backend/.env to use a real, persistent database instead.");
    } catch (err) {
      console.error("\n❌ Could not start the automatic in-memory database.");
      console.error("   This usually means the MongoDB download was blocked by your network/firewall.\n");
      console.error("   Fix: use a real MongoDB instead — it's free and takes ~2 minutes:");
      console.error("   1. Create a free cluster at https://www.mongodb.com/cloud/atlas/register");
      console.error("   2. Copy its connection string (Database > Connect > Drivers)");
      console.error("   3. Put it in backend/.env as MONGO_URI=... and restart the server\n");
      console.error("   (Underlying error: " + err.message + ")");
      process.exit(1);
    }
  }

  await mongoose.connect(uri);
  console.log("✅ MongoDB connected");
}
