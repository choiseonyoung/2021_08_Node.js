// JS 코드가 html 문서 어디에 있든지 상관없이 실행할 수 있도록 하는 조치
// window.load() 와 비슷한 역할 (지금은 거의 사용하지 않는 옛날 코드)
document.addEventListener("DOMContentLoaded", () => {
  const api_text_call = document.querySelector("p.api_text");
  const api_text_res = document.querySelector("span.api_text");

  const api_json_call = document.querySelector("p.api_json");
  const api_json_res = document.querySelector("span.api_json");

  // p.api_text가 화면에 있으면
  if (api_text_call) {
    api_text_call.addEventListener("click", (e) => {
      fetch("/api/text")
        .then((res) => res.text())
        // 응답 받은 것 중에 text만 추출해서 다음 then에 보내라 (res.send를 했기 때문에 text로 리턴한 것)
        .then((result) => {
          console.log(result);
          api_text_res.innerText = result;
        });
    });
  }
  if (api_json_call) {
    // promise 방식으로 실행하기 위하여
    // 1. 동기식으로 실행할 함수들을 감싸는 외부 함수에 async를 설정
    api_json_call.addEventListener("click", async (e) => {
      // promise 방식으로 비동기 함수를 동기식으로 실행시키기
      // 2. 각 실행함수 앞에 await 키워드 설정
      const res = await fetch("/api/json");
      const result = await res.json();
      await console.log(result);

      let json_html = `<span>${result.j_name}</span>&nbsp`;
      json_html += `<span>${result.j_addr}</span>&nbsp`;
      json_html += `<span>${result.j_tel}</span>&nbsp`;
      json_html += `<span>${result.j_age}</span>&nbsp`;

      api_json_res.innerHTML = json_html;
    });
  }
});
