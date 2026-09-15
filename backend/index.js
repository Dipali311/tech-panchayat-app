// backend/index.js
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

