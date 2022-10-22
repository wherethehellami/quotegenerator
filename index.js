let quote = document.getElementById("Quote");
let author = document.getElementById("Author");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText =" \"  " + item.content + " \"";
      author.innerText = item.author;
    });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);