const router = require("express").Router();
const itemController = require("../controllers/item");

router.route("/").get((req, res) => {
  itemController.getAll().then((data) => {
    res.send(data);
  });
});

module.exports = router;
