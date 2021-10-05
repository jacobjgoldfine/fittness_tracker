const { Schema, model } = require("mongoose");

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        required: "Choose a type",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a name",
      },
      duration: {
        type: Number,
        required: "Enter a duration",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = model("Workout", workoutSchema);

module.exports = Workout;
