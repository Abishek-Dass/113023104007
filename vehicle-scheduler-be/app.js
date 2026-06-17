require("dotenv").config();

console.log("TOKEN =", process.env.TOKEN);

const express = require("express");
const cors = require("cors");

const vehicleRoutes = require("./src/routes/vehicleRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Vehicle Scheduler API Running");
});

app.use("/api", vehicleRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});