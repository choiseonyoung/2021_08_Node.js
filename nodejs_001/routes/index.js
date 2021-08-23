// express frame work의 객체 선언
const express = require("express");

// express framework에서 routing을 수행하기 위한
// sub 객체 선언
const router = express.Router();
// (스프링에서처럼 하려면 router > controller)

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
  // (index ~ 파일을 열어서 렌더링해서 보여라)
});

router.get("/home", function (req, res, next) {
  res.send("Hello Korea");
  // (문자열을 그대로 화면에 보여라)
});

router.get("/json", function (req, res) {
  let mData = {
    name: "홍길동",
    tel: "010-1111-1111",
    age: 33,
  };
  res.json(mData);
  // (json 파일을 보낼 때)
});

// 다른 js 파일에서 import(require)하여 사용할 수 있도록
// controller 객체를 내보내기
module.exports = router;
