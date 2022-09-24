const express = require("express");
const router = express.Router()


router.get("/test", (req, res) => {
    res.send("Yo get test")
})

router.post("/test", (req, res) => {
    res.send("Yo post test")
})

module.exports = router;