const mongoose = require("mongoose");

const TalkSphereSchema = new mongoose.Schema({
  messages: [
    {
      username: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});


const TalkSphere = new mongoose.model('TalkSphere', TalkSphereSchema);

module.exports = TalkSphere;