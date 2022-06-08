const express = require("express");

const msgController = require("../controllers/messages.controller.js");

const messagesRouter = express.Router();

messagesRouter.get("/", msgController.getMessages);
messagesRouter.post("/", msgController.postMessage);

module.express = messagesRouter;
