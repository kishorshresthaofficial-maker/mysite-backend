import express from "express";
import { createEvent, deleteEvent, getEventById, getEvents, updateEvent } from "../controller/weddingController.js";


const router = express.Router();

router.post("/create", createEvent);
router.get("/getEvents", getEvents);
router.get("/:id", getEventById)
router.put("/update/:id", updateEvent)
router.delete("/:id", deleteEvent)

export default router;