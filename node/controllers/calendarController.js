import Event from "../models/Event.js";
//import moment from "moment";
export const createEvent = async (req, res) => {
  try {
    // const event = new Event(req.body);
    // await event.save();
    const event = await Event.create(req.body);
    res.json( event );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getEvents = async (req, res) => {
  try {
    const events = await Event.findAll({
      // start: { $gte: moment(req.query.start).toDate() },
      // end: { $lte: moment(req.query.end).toDate() },
    });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
