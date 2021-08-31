const express = require("express");
const router = express.Router();
const moment = require("moment");

const { tbl_orders, tbl_product } = require("../models/index");

router.get("/:tnum", (req, res) => {
  const o_date = moment().format("YYYY[-]MM[-]DD");
  const tnum = req.params.tnum;
  tbl_orders
    .findAll({
      where: { o_table: tnum, o_pay: false },
    })
    .then((r) => {
      tbl_product.findAll().then((result) => {
        res.render("list", { PROD: result, ORDER: r, o_date, tnum });
      });
    });
});

router.post("/:tnum", (req, res) => {
  let tnum = req.params.tnum;
  console.log(req.body);

  tbl_orders
    .findOne({
      where: { o_table: tnum, o_pcode: req.body.o_pcode, o_pay: false },
    })
    .then((result) => {
      tbl_orders.update(
        {
          o_date: req.body.o_date,
          o_count: result.o_count + 1,
          o_total: result.o_total + result.o_price,
        },
        { where: { o_seq: result.o_seq } }
      );
      res.redirect(`/list/${tnum}`);
    })
    .catch((err) => {
      tbl_orders.create(req.body);
      res.redirect(`/list/${tnum}`);
    });
});

module.exports = router;
