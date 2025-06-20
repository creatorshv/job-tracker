import jwt from "jsonwebtoken";

export default function jwtAuth(req, res, next) {
  const token =
    req.cookies?.jwt ||
    (req.headers.authorization?.startsWith("Bearer ")
      ? req.headers.authorization.split(" ")[1]
      : null);

  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized." });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: payload.userId };
    next();
  } catch (error) {
    console.error("JWT Verification Failed:", error.message);
    return res
      .status(401)
      .json({ success: false, message: "Authentication failed." });
  }
}
