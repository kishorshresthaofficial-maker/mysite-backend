import express from 'express';
import { createEventCategory, deleteEventCategory, getAllEventCategories, getEventCateogoryById, updateEventCategory } from '../controller/eventCategoryController.js';
import { updateEvent } from '../controller/eventController.js';

const router = express.Router();

router.post("/create", createEventCategory);
router.get("/getCategories", getAllEventCategories)
router.get('/:id', getEventCateogoryById)
router.delete('/:id', deleteEventCategory)
router.put('/update/:id', updateEventCategory)

export default router;