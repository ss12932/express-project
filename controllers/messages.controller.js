function getMessages(req, res) {
  res.send("<ul><li>Helloo Albert!</li></ul>");
}
//use named fn, if something went wrong node will be able to tell us the name of fn compared to using fn exp + arrow fns. extra debugging benefit

function postMessage(req, res) {
  console.log("updating messages");
}

module.exports = {
  getMessages,
  postMessage,
};
