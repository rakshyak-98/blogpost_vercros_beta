const ShareController = require("../controller/shareController");
const Router = require("express").Router();
Router.post("/", ShareController.createShare);
Router.get('/', ShareController.getBlogSharedWithMe);

module.exports = Router;

