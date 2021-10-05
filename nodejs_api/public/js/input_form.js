const form_data_send = async () => {
  // (유효성 검사 없이 통째로 데이터를 보내고 싶을 때 쓰는 코드)
  const form = document.querySelector("form");
  // form의 input box의 모든 정보를 FormData 객체로 생성
  const form_data = new FormData(form);

  // FormData에서 input 요소(Entries)만 추출하여 별도의 객체로 생성
  // (input box 내용 하나하나 검사하지 않고 한꺼번에)
  const entries_data = Object.fromEntries(form_data.entries());

  // (다시 string형으로 바꿔서 전송)
  const fetch_option = {
    method: "POST",
    body: JSON.stringify(entries_data),
    header: {
      Content_Type: "application/json",
    },
  };

  const res = await fetch("/bbs/write", fetch_option);
  const result = await res.json();
  console.log(result);
  await bbs_list_view(result);
};

document.addEventListener("DOMContentLoaded", async () => {
  const btn_send = document.querySelector("button.btn_save_form");
  if (btn_send) {
    btn_send.addEventListener("click", () => {
      form_data_send();
    });
  }
});
