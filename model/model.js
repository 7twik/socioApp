const mongoose = require("mongoose");

const notesSchema = {
  title: String,
  content: String,
  Username:{
    type:String,
    required: true
  },
  url:{
    type:String,
    required: true
  }
};

const Note = mongoose.model("finalissima", notesSchema);

module.exports = Note;
