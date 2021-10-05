const router = require("express").Router();
const Workouts = require("../../models");

Workouts.aggregate([
  {
    $addFields: {
      totalDuration: { $sum: "$exercises.duration" },
    },
  },
]);
