const path = require("path");
const express = require("express");
const db = require("../models");
const router = express.Router();

// createWorkout - POST
router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
        console.log("created a workout!")
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

// router.post("/api/transaction", ({ body }, res) => {
//   Transaction.create(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// everything
router.get("/all", ({ body }, res) => {
    db.Workout.find({})
    // .sort({ date: -1})
    .then(dbWorkout => {
        res.json(dbWorkout);
        console.log("retrieved all!")
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

//
// getLastWorkout - GET 
router.get("/api/workouts", ({ body }, res) => {
    db.Workout.find({})
    // .sort({ date: -1})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})


// app.post("/submit", ({body}, res) => {
//     const user = new User(body);
//     user.setFullName();
//     user.lastUpdatedDate();
  
//     User.create(user)
//       .then(dbUser => {
//         res.json(dbUser);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });


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



// getWorkoutsInRange - GET


// const router = require("express").Router();
// const Transaction = require("../models/transaction.js");



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