const mongoose = require("mongoose");

const TalkSphereSchema = new mongoose.Schema({
  channel: {
    type: String,
    enum: ["global", "school", "college", "professional"],
    required: true,
  },
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

module.exports = mongoose.model("TalkSphere", TalkSphereSchema);