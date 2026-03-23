import mongoose from "mongoose";

const routeSchema = new mongoose.Schema({
  sourceCity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "City",
    required: true
  },
  destinationCity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "City",
    required: true
  },
  distanceKm: Number
});

export default mongoose.model("Route", routeSchema);