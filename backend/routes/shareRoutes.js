const ShareController = require("../controller/shareController");

const Router = require("express").Router();
Router.post("/", ShareController.createShare);
Router.get('/', ShareController.getBlogSharedWithMe);
Router.patch('/:id', ShareController.editShareByMe);
// Router.delete('/:id', ShareController.deleteShare);

module.exports = Router;

