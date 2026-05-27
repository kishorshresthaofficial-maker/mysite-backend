import EventCategory from "../model/eventcategory.js";

export const createEventCategory = async (req, res) => {
  try {
    const newEventCategory = new EventCategory(req.body);
    await newEventCategory.save();

    res.status(201).json({
      message: "Event category created successfully",
      eventCategory: newEventCategory,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create event category",
      error: error.message,
    });
  }
};

export const getAllEventCategories = async (req, res) => {
    try {
        const eventCategory = await EventCategory.find()
        res.json(eventCategory)
    }
    catch(error)
    {
        res.status(500).json({
            message: "Failed to get event category",
            error: error.message,
        });
    }
}

export const getEventCateogoryById = async (req, res) => {
    try {
        const eventCategoryById = await EventCategory.findById(req.params.id)
        if(!eventCategoryById)
        {
            return res.status(404).json({
                message: "Event category not found"
            })
        }
        res.json(eventCategoryById)
    }
    catch(error)
    {
        res.status(500).json({
            message: "Failed to get event category",
            error: error.message,
        });
    }
}

export const updateEventCategory = async (req, res) => {
  try {
    const updatedEventCategory = await EventCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedEventCategory) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    res.json({
      message: "Event category updated successfully",
      eventCategory: updatedEventCategory,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update event category",
      error: error.message,
    });
  }
};


export const deleteEventCategory = async (req, res) => {
    try {
            const deletedEventCategory = await EventCategory.findByIdAndDelete(req.params.id)
            if(!deletedEventCategory)
            {
                return res.status(404).json({
                    message: "Event category not found"
                })
            }
            res.json({
                message: "Event category deleted successfully",
                eventCategory: deletedEventCategory,
            })

    }
    catch(error)
    {
        res.status(500).json ({
            message: "Failed to delete event category",
            error: error.message,
        });
    }
}