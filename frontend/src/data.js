import axios from "axios";

export function initGame(cb) {
  axios({
    method: "GET",
    url: `http://localhost:3333/init`,
    headers: { "Content-Type": "application/json; charset=utf-8", Authorization: "blahhhh" },
    crossDomain: true
  })
  .then(res => {
    cb(res.data);
  })
  .catch(e => {
    console.log(e);
  });
}

export function endGame() {
  return "valbbb";
}
