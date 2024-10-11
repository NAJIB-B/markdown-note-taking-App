const mongoose = require("mongoose")


const noteSchema = new mongoose.Schema({
  title : {
    type: String,
    required: [true, 'A note must have a title'],
    unique: [true, 'Note title must be unique']
  },
  markdownContent: {
    type: String,
    required: [true, 'A note must have content'],
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})


const Note = mongoose.model('Note', noteSchema)

module.exports = Note
