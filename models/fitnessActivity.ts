import mongoose from "mongoose";

const FitnessActivitySchema = new mongoose.Schema({
  activity: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },

  difficulty: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
    validate: {
      validator: Number.isInteger,
      message: "{VALUE} is not an integer value",
    },
  },

  recommendation: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
    validate: {
      validator: Number.isInteger,
      message: "{Value} is not an integer value",
    },
  },
});

const FitnessActivity =
  mongoose.models.FitnessActivity ||
  mongoose.model("FitnessActivity", FitnessActivitySchema);

export default FitnessActivity;
