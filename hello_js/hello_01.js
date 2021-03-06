// hello.js
console.log("대한민국");
console.log(30 + 40);
console.log("대한민국", "우리나라", "Republic of Korea");
console.log(30 + 40);
console.log("30 + 40 =", 30 + 40);

// 전통적인 JS에서 변수를 선언하는 방법
// 전역적인(public) 변수를 선언하고자 할 때
var 변수1 = 100;

// 지금 권장하는 변수 선언 방법
// 모듈, 함수 scope 단위로 설정되는 변수
// scope에 따라서 접근이 구별된다
let 변수2 = 200;

// 한번 값이 저장되면 값을 변경할 수 없다
// java의 final 과 같다
// primitive(int, float, string)가 아닌
// 객체 타입의 변수들을 만들 때는 가급적 const 를 사용하라
// 함수를 선언할 때도 사용
const 상수1 = 300;

let 숫자1 = 100;
let 숫자2 = 200;
let 합계 = 숫자1 + 숫자2;
console.log(숫자1, "+", 숫자2, "=", 합계);

// 함수 만들기
const 함수 = function () {
  let 숫자1 = 100;
  let 숫자2 = 200;
  let 합계 = 숫자1 + 숫자2;
  console.log(숫자1, 숫자2, 합계);
};

// 함수 실행
함수();

/**
 * 함수(function)
 * 프로그래밍 언어에서 포괄적인 의미의 모듈
 *
 * 프로그램을 작은 단위로 쪼개서 개발할 때
 * 개발을 수행하고 테스트를 수행하는 단위
 *
 * 함수는 그 자체를 변수에 담을 수 있다
 * 변수라는 이름으로 함수를 선언한다 라고 이해하면 된다
 * const 변수 = function() { }
 *
 * 자바스크립트는 함수를 변수에 담을 수 있다
 * 즉, 자바스크립트는 함수형(function type) 언어다 라고 한다
 * 따라서 자바스크립트처럼 함수 몸체를 변수에 담을 수 있게 설계된 언어가 몇 있는데
 *          이러한 언어에서 사용되는 함수를 "1급 함수" 라고 한다
 *          함수가 객체와 동등한 지위를 갖는다
 *
 * 메서드(method)
 * 프로그래밍 언어에서 함수의 작은 축소 개념
 * Java를 예로 들면
 * 반드시 클래스(interface...)를 만들고
 * 클래스 내부에서 함수를 선언하여 호출하는 프로그래밍 구조
 *
 * method는 호출을 하려면
 * 1. 클래스를 객체로 선언, 생성하고
 * 2. 생성된 객체를 통해서 호출을 하는 구조
 * Class class = new Class();
 * class.method();
 *
 * method는 다음과 같은 코드를 만나면
 * 변수 = class.method()
 * class 객체에 포함된 method() 를 실행하여 그 결과를 변수에 담아라
 */

// 함수의 결과를 변수 "함수1"에 담아라 라는 것이 아니고
// 함수1 이라는 함수를 선언하는 명령문이다
const 함수1 = function () {
  console.log("대한민국");
};

// ES6   이전 버전(Common JS 버전)에서 사용하던 함수 방식
function func2() {
  console.log("우리나라");
}
