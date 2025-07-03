const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  participants: [
    { type: Schema.Types.ObjectId, ref: "User", required: true }
  ],
  messages: [
    {
      msg: { type: String, required: true },
      sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
      createdAt: { type: Date, default: Date.now }
    }
  ]
});

module.exports = mongoose.model("Chat", chatSchema);
