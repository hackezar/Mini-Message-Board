const asyncHandler = require("express-async-handler");

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date(),
      id: 1
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date(),
      id: 2
    },
    {
        text: "Yerrrr",
        user: 'Bob',
        added: new Date(),
        id: 3
    }
  ];

const getHomepage = asyncHandler(async (req, res) => {
    try {
   res.render("homepage", { title: "Mini Messageboard", messages: messages});
    } catch(err){
        console.error(err);
    }
});

const getNewMessageForm = asyncHandler(async (req, res) => {
    res.render("form")
})

const postForm = asyncHandler(async (req, res) => {
    const userText = req.body.userText;
    const authorName = req.body.authorName;
    const email = req.body.email
    const age = req.body.age
    const id = messages.length + 1;
    messages.push({ text: userText, user: authorName, email: email, age: age, added: new Date(), id: id });
    res.redirect("/");
});

const getMessage = asyncHandler(async (req, res) => {
    if (isNaN(req.params.messageId))
        return;
    else {
    const filterMessages = messages.filter((message) => {
        return message.id == req.params.messageId
    })
    res.render("expandedMessage", {message: filterMessages[0]});
    }
});

module.exports = { getHomepage, getNewMessageForm, postForm, getMessage }