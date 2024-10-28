const asyncHandler = require("express-async-handler");
const db = require("../db/queries");


const getMessageBoard = asyncHandler(async (req, res) => {
    //const messages = await db.getMessages();
    console.log('homepage');
    res.render("homepage");
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

module.exports = { getMessageBoard, getNewMessageForm, postForm, getMessage }