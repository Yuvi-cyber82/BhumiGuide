import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "dev-secret-change-me";

export function signToken(user) {
  return jwt.sign({ id: user._id, email: user.email }, SECRET, { expiresIn: "30d" });
}

/** Requires a valid Bearer token — rejects the request if missing/invalid. */
export function requireAuth(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: "Not authenticated." });
  try {
    req.userId = jwt.verify(token, SECRET).id;
    next();
  } catch {
    return res.status(401).json({ error: "Invalid or expired session. Please log in again." });
  }
}

/** Attaches req.userId when a valid token is present, but never blocks the request. */
export function optionalAuth(req, _res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (token) {
    try {
      req.userId = jwt.verify(token, SECRET).id;
    } catch {
      /* ignore invalid token for optional routes */
    }
  }
  next();
}
