import express from "express";
import { createEvent, deleteEvent, getEventById, getEvents, updateEvent } from "../controller/eventController.js";

const router = express.Router();

router.post("/create", createEvent);
router.get('/getEvents', getEvents);
router.get('/:id', getEventById);
router.delete('/:id', deleteEvent);
router.put('/update/:id', updateEvent)

export default router;