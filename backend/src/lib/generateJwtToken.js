import jwt from "jsonwebtoken";

export default function generateJwtToken(user, accessFrom, res) {
  if (!user._id) {
    throw new Error("User ID is required for JWT generation");
  }

  if (!accessFrom) {
    throw new Error("Access method is required for JWT generation");
  }

  const expiresIn = accessFrom === "extension" ? "15m" : "7d";

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn,
  });

  if (accessFrom === "webApp") {
    res.cookie("jwt", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV !== "development",
    });
  }

  return token;
}
