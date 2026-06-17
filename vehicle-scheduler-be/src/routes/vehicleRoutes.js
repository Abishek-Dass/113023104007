const express = require("express");
const router = express.Router();

const { getData } =
    require("../controllers/vehicleController");

router.get("/test", (req, res) => {
    res.json({
        success: true,
        message: "Vehicle Route Working"
    });
});

router.get("/data", getData);

module.exports = router;