import mongoose from "mongoose";

const weddingSnapsSchema = new mongoose.Schema({
    clientName: String,
    clientRole: String,
    email: String,
    contact: Number,

    eventName: String,
    eventYear: Number,
    eventMonth: String,
    eventDate: Number,
    eventDetails: String,
    eventLocation: String,

    package: String,
    packagePrice: Number,
    advancePaid: Number,
    remainingAmount: Number,
    photoAlbum: String,
    photoFrame: String,
    pendrive: String,
    projectStatus: String
    

})

const weddingEvents = mongoose.model("weddingEvents", weddingSnapsSchema);
export default weddingEvents;