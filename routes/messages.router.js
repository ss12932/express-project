const express = require("express");

const msgController = require("../controllers/messages.controller");

const messagesRouter = express.Router();

messagesRouter.get("/", msgController.getMessages);
messagesRouter.post("/", msgController.postMessage);

module.exports = messagesRouter;
