/* Standalone script: `npm run seed`. Mainly useful when running against a
 * real, persistent MONGO_URI — the server also auto-seeds on every boot, so
 * this is only needed if you want to force a re-seed on demand. */
import "dotenv/config";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";
import { seedReferenceData } from "./utils/seedReferenceData.js";

async function run() {
  await connectDB();
  await seedReferenceData();
  await mongoose.disconnect();
  process.exit(0);
}

run().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
