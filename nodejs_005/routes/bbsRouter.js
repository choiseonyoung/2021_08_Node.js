const express = require("express");
const router = express.Router();
// JS, nodejs 에서 날짜 시간을 취급하는
// 가장 많이 사용되는 middleware
const moment = require("moment");

const { tbl_bbs } = require("../models/index");

// 설정된 root get는
// URL에서 localhost:3000/bbs/write 요청할 때
// 응답할 함수
router.get("/write", (req, res) => {
  const BBS = {
    b_date: moment().format("YYYY[-]MM[-]DD"),
    b_time: moment().format("HH:mm:SS"),
  };

  res.render("write", { BBS });
});

router.post("/write", (req, res) => {
  // form 을 통해서 POST로 전송되어온 데이터는
  // req.body에 담겨서 온다
  tbl_bbs.create(req.body).then((result) => res.redirect("/"));
});

router.get("/detail", (req, res) => {
  //list에서 게시물을 클릭했을 때
  // 게시물의 id(b_id)값을 queryString으로 가지고 여기에 도달한다
  const b_id = req.query.b_id;

  // PK를 기준으로 1개의 데이터를 추출하라
  tbl_bbs.findByPk(b_id).then((result) => {
    console.table(result);
    res.render("detail", { BBS: result });
  });
});

router.get("/delete", (req, res) => {
  const b_id = req.query.b_id;
  tbl_bbs
    // 데이터를 삭제하라
    .destroy({
      // b_id 컬럼의 값이 변수 b_id에 담긴 값과 같으면
      where: { b_id },
      // where: { b_id: b_id}
      // 원래 이렇게 쓰는거지만, 변수와 데이터가 같을 땐 하나만 써도 돼서 생략한 것
    })
    .then(() => {
      res.redirect("/");
    });
});

router.get("/update", (req, res) => {
  const b_id = req.query.b_id;

  // (findByPk 대신 쓰는 방법)
  // // PK 또는 일반 컬럼에 조건을 주어 1개의 데이터를 SELECT 할 때
  // tbl_bbs.findOne({
  //   where: { b_id },
  // });
  // // (where 절에 들어가는 게 프라이머리키가 아니면 오류남)

  tbl_bbs.findByPk(b_id).then((result) => {
    res.render("write", { BBS: result });
  });
  // 프라이머리키에 해당하는 ~를 찾아서 그 결과를 write한테 보냄
});

router.post("/update", (req, res) => {
  const b_id = req.query.b_id;

  req.body.b_id = b_id;
  tbl_bbs.update(req.body, { where: { b_id } }).then((result) => {
    res.redirect("/");
  });
});

module.exports = router;
