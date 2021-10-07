const router = require("express").Router();
const Workout = require("../../models");

router.get("/", (req, res) => {
  Workout.find({}).then((dbWorkout) => {
    res.json(dbWorkout);
  });
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ]);
});

router.put("/", ({ body }, res) => {
  Workout.insertMany(body).then((dbWorkout) => {
    res.json(dbWorkout);
  });
});

router.post("/", ({ body }, res) => {
  Workout.create(body).then((dbWorkout) => {
    res.json(dbWorkout);
  });
});
