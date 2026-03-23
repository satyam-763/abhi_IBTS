import mongoose from "mongoose";

const busSchema = new mongoose.Schema({

  busNumber: String,
  name: String,
  type: String,
  depot: String,

  route: {
    from: String,
    to: String,
    distanceKm: Number,
    stops: [String]
  },

  time: String,
  fare: Number,

  runningDays: [
    {
      type: String,
      enum: [
        "Sunday","Monday","Tuesday",
        "Wednesday","Thursday","Friday","Saturday"
      ]
    }
  ]
});

export default mongoose.model("Bus", busSchema);