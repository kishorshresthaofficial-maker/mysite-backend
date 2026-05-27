import weddingEvents from "../model/weddingsnapsevents.js"

export const createEvent = async (req, res) => {
    try {
        const createdEvent = await weddingEvents.create(req.body);
        res.status(201).json({
            message: "Event created successfully",
            event: createdEvent,
        })
        
    }
    catch(error)
    {
        res.status(500).json({
            message: "Failed to create event",
             error: error.message,
        })
    }
}

export const getEvents = async (req, res) => {
  try {
    const events = await weddingEvents.find();

    res.json(events);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get events",
      error: error.message,
    });
  }
};


export const getEventById = async (req, res) => {
  try {
    const eventById = await weddingEvents.findById(req.params.id);

    if (!eventById) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    res.json(eventById);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get event",
      error: error.message,
    });
  }
};


export const updateEvent = async (req, res) => {
  try {
    const updatedEvent = await weddingEvents.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedEvent) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    res.json({
      message: "Event updated successfully",
      event: updatedEvent,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update event",
      error: error.message,
    });
  }
};


export const deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await weddingEvents.findByIdAndDelete(req.params.id);

    if (!deletedEvent) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    res.json({
      message: "Event deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete event",
      error: error.message,
    });
  }
};
