import mongoose from "mongoose";

const eventCategorySchema = new mongoose.Schema({
    categoryName: String,

})

const EventCategory = mongoose.model("EventCategory", eventCategorySchema);

export default EventCategory;