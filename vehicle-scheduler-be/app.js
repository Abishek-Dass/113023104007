require("dotenv").config();

console.log("TOKEN =", process.env.TOKEN);

const express = require("express");
const cors = require("cors");

const vehicleRoutes = require("./src/routes/vehicleRoutes");
const notificationRoutes = require("./src/routes/notificationRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("AffordMed Assessment API Running");
});

// Vehicle Scheduler Routes
app.use("/api", vehicleRoutes);

// Notification Routes
app.use("/api/notifications", notificationRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});