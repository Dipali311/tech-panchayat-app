// backend/routes/auth.js
const express = require("express");
const router = express.Router();

const sampleUsers = [
  { email: "admin", password: "admin", role: "admin" },
  { email: "resident", password: "resident", role: "resident" },
  { email: "gp101", password: "gp101", role: "grampanchayat" },
];

router.post("/login", (req, res) => {
  const { email, password, role } = req.body;
  const user = sampleUsers.find(
    (sampleUser) =>
      sampleUser.email.toLowerCase() === String(email).toLowerCase() &&
      sampleUser.password === password &&
      sampleUser.role === String(role).toLowerCase()
  );

  if (!user) {
    return res.json({ success: false, message: "Invalid credentials" });
  }

  return res.json({
    success: true,
    role: user.role,
    email: user.email,
  });
});

module.exports = router;
