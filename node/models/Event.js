// import  mongoose  from "mongoose";

// const EventSchema = mongoose.Schema ({
//     start: Date,
//     end: Date,
//     title: String,
// })

// const Event = mongoose.model("Event", EventSchema);

// export default Event;


import calendarioDB from '../database/calendarioDB.js';
import  DataType from 'sequelize';

const Event = calendarioDB.define('events', {
    title: {type: DataType.STRING},
    start: {type: DataType.DATE},
    end: {type: DataType.DATE},

});

export default Event;