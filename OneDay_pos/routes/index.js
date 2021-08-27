var express = require("express");
var router = express.Router();

const { tbl_orders } = require("../models/index");

/* GET home page. */
router.get("/", function (req, res, next) {
  tbl_orders.findAndCountAll({ where: { o_pay: false } }).then((result) => {
    res.render("index", { TB: result });
  });
});

module.exports = router;
