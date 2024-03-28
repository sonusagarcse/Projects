let link = "https://api.whatsapp.com/send?phone=8581040110&text=hii";

let no_send = document.getElementById("number_send");

function send_msg() {
  window.location.href = `https://api.whatsapp.com/send?phone=${no_send.value}&text=hii`;
}

function send_query(msg) {
  window.location.href = `https://api.whatsapp.com/send?phone=9801664500&text=${msg}`;
}
