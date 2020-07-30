const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    date: { type: Date, required: true, default: Date.now },
    exercises: [
        {
            type: { type: String, required: true},
            name: { type: String, trim: true, required: true},
            duration: { type: Number, required: true },
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number
        }
    ]
}, { versionKey: false }
);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;