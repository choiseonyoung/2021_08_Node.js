const express = require("express");
const router = express.Router();
const moment = require("moment");

const { tbl_orders, tbl_product } = require("../models/index");

router.get("/:tnum", (req, res) => {
  const o_date = moment().format("YYYY[-]MM[-]DD");
  const tnum = req.params.tnum;
  tbl_orders
    .findOne({
      where: { o_table: tnum, o_pay: false },
    })
    .then((result) => {
      tbl_product.fine;
      res.render("list", {
        ORDER: result,
        o_date,
        tnum,
      });
    });
});

module.exports = router;
