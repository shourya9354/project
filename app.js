require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const authRoutes = require("./controller/routes/auth.routes");
app.use("/api", authRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
