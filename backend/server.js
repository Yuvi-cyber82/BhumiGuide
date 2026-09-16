import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
 
import { connectDB } from "./src/config/db.js";
import { seedReferenceData } from "./src/utils/seedReferenceData.js";
import { UPLOAD_DIR } from "./src/middleware/upload.js";
 
import authRoutes from "./src/routes/auth.routes.js";
import referenceRoutes from "./src/routes/reference.routes.js";
import aiRoutes from "./src/routes/ai.routes.js";
import uploadRoutes from "./src/routes/upload.routes.js";
import progressRoutes from "./src/routes/progress.routes.js";
 
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 4000;
 
async function main() {
  await connectDB();
  await seedReferenceData();
 
  const app = express();
  app.use(cors());
  app.use(express.json({ limit: "2mb" }));
  app.use("/uploads", express.static(UPLOAD_DIR));
 
  app.get("/api/health", (_req, res) => res.json({ ok: true }));
  app.use("/api/auth", authRoutes);
  app.use("/api/reference", referenceRoutes);
  app.use("/api/ai", aiRoutes);
  app.use("/api/uploads", uploadRoutes);
  app.use("/api/progress", progressRoutes);
 
  app.use((err, _req, res, _next) => {
    console.error(err);
    res.status(err.status || 500).json({ error: err.message || "Server error." });
  });
 
  app.listen(PORT, () => {
    console.log(`🚀 BhumiGuide Intelligence API running on http://localhost:${PORT}`);
    if (!process.env.GEMINI_API_KEY) {
      console.log("ℹ️  GEMINI_API_KEY not set — AI Assistant will use the rule-based fallback.");
    }
  });
}
 
main().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});