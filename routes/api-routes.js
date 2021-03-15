const path = require("path");
const express = require("express");
const Workout = require("../models/workout");
const router = express.Router();


// getLastWorkout - GET 
router.get("/api/workouts", ({ body}, res) => {
    Workout.find({})
    // .sort({ date: -1})
    .then(workouts => {
        res.json(workouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

// router.get("/api/transaction", (req, res) => {
//   Transaction.find({})
//     .sort({ date: -1 })
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// addExercise - PUT

// createWorkout - POST

// getWorkoutsInRange - GET


// const router = require("express").Router();
// const Transaction = require("../models/transaction.js");

// router.post("/api/transaction", ({ body }, res) => {
//   Transaction.create(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.post("/api/transaction/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });


module.exports = router;


module.exports = router