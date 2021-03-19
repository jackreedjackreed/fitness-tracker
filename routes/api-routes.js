const router = require("express").Router();
const Workout = require("../models/workout.js");

// getLastWorkout - GET 
router.get("/api/workouts", ({ body }, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {$sum: "$exercises.duration"}
            },
        }
    ])
    // .sort({ date: -1})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

// addExercise - PUT
router.put("/api/workouts/:id", (req, res) => {
    console.log(req.params.id)
    Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}})
    .then(dbWorkout => {
        res.json(dbWorkout);
        console.log("updated a workout")
    })
    .catch(err => {
        res.status(400).json(err);
    })
})

// createWorkout - POST
router.post("/api/workouts", (req, res) => {
    console.log(req.body);
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
        console.log("created a workout!")
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

// getWorkoutsInRange - GET
router.get('/api/workouts/range', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {$sum: "$exercises.duration"},
                totalWeight: {$sum: "$exercises.weight"}
            }
        }
    ])
    // limit to last 7
    .limit(7)
    // sort descending
    .sort({_id: -1})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err)
    });
})


// View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

//   * View the total duration of each workout from the past seven workouts on the `stats` page.

// db.orders.aggregate(
//     [
//       { $match: { status: "A" } },
//       { $group: { _id: "$cust_id", total: { $sum: "$amount" } } },
//       { $sort: { total: -1 } },
//       { $limit: 2 }
//     ],
//     {
//       cursor: { batchSize: 0 }
//     }
//   


module.exports = router;