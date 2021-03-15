const mongoose = require(mongoose);
const { Schema } = require("mongoose");

// add day, name, type, weight, sets, reps, duration, distance traveled


const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now(),
    },
    exercises: [
        {
            name: {type: String, trim: true, required: true},
            type: {type: String, trim: true, required: true},
            weight: {type: Number, trim: true, default: 0},
            sets: {type: Number, trim: true, default: 0},
            reps: {type: Number, trim: true, default: 0},
            duration: {type: Number, trim: true},
            distance: {type: Number, trim: true}
        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout

// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const transactionSchema = new Schema({
//   name: {
//     type: String,
//     trim: true,
//     required: "Enter a name for transaction"
//   },
//   value: {
//     type: Number,
//     required: "Enter an amount"
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   }
// });


// const Transaction = mongoose.model("Transaction", transactionSchema);

// module.exports = Transaction;
