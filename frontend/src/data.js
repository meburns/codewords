import axios from "axios";
const url = "http://localhost:3333";

export function initGame(cb) {
  axios({
    method: "POST",
    url: `${url}/games`,
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

export function getGame(identity, cb) {
  axios({
    method: "GET",
    url: `${url}/games/${identity}`,
    headers: { "Content-Type": "application/json; charset=utf-8", Authorization: "blahhhh" },
    crossDomain: true
  })
  .then(res => {
    cb(res.data[0].data);
  })
  .catch(e => {
    console.log(e);
  });
}

export function getGames(cb) {
  axios({
    method: "GET",
    url: `${url}/games`,
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

export function updateGame(identity, cb) {
  axios({
    method: "PUT",
    url: `${url}/games/${identity}`,
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
