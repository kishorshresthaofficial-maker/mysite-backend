import mongoose from "mongoose";

const eventListSchema = new mongoose.Schema({
  eventDate: String,
  eventName: String,
  clientName: String,
  status: String,
  amount: Number,
  company: String,
});

const Events = mongoose.model("Events", eventListSchema);

export default Events;