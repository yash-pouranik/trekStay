const ExpressError = require("../utils/expressError.js")
const User = require("../models/user.js");
const Chat = require("../models/messages.js"); 



module.exports.getInbox = async(req, res) => {

  console.log("/inbox", req.user.username);
    const allChat = await Chat.find({
        participants: { $all: [req.user._id] }
    }).populate("participants");
    
  res.render("chat/inbox", {allChat});
};

module.exports.getPersonalChat = async (req, res, next) => {
  const uid = req.params.uid;
  const rid = req.params.rid;
  const loggedInUserId = req.user._id.toString();

  if(uid === loggedInUserId || rid === loggedInUserId){
    const user = await User.findById(uid);
    const reciever = await User.findById(rid);

    //fetch all chats
    const allChat = await Chat.find({
        participants: { $all: [req.user._id] }
    }).populate("participants");


    // Fetch the chat (two-way)
    const chat = await Chat.findOne({
        participants: { $all: [uid, rid] }
    }).populate("messages.sender");

    res.render("chat/chat", { user, reciever, chat, allChat });
  } else{
    let w = "yash";
    req.flash("error", "You are not authorized.")
    next(new ExpressError(404, "Page Not Found"));
  }

  
};

module.exports.postMessage = async (req, res) => {
  const sId = req.params.uid;
  const rId = req.params.rid;
  const { msg } = req.body;

  if (!msg || !msg.trim()) {
    return res.status(400).send("Empty message not allowed");
  }

  // Make sure only one chat exists for the user pair (regardless of order)
  let chat = await Chat.findOne({
    participants: { $all: [sId, rId] }
  });
  

  const msgObject = {
    msg,
    sender: sId
  };

  if (chat) {
    await Chat.findByIdAndUpdate(chat._id, { $push: { messages: msgObject } });
  } else {
    const newChat = new Chat({
      participants: [sId, rId],
      messages: [msgObject]
    });
    await newChat.save();
  }

  res.redirect("back");
}