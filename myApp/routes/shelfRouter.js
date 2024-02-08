var express = require("express");
var router = express.Router();
const shelfController = require("../Controllers/shelfController");

//POST
router.post("/create", shelfController.shelfCreate);

//GET
router.get("/getAll", shelfController.shelfGetAll);
router.get("/getOne/:id", shelfController.shelfGetOne);

//PUT
router.put("/update/:id", shelfController.shelfUpdate);

//DELETE
router.delete("/delete/:id", shelfController.shelfDelete);

//send Router
module.exports = router;
