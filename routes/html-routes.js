const path = require('path');
const express = require('express');
const router = express.Router();

// index
router.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

// index 
router.get("/index", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

// exercise
router.get("/exercise", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

// stats
router.get("/stats", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

// all other routes --> index
router.get("*", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});


module.exports = router;