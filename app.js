const heartVal = document.getElementById("heart-val");
const copyVal = document.getElementById("copy-val");
const cardHearts = document.getElementsByClassName("card-heart");
const copyBtns = document.getElementsByClassName("copy-btn");

let heart = 0, copy = 0;
heartVal.innerText = heart;
copyVal.innerText = copy;

for(let i=0; i<cardHearts.length; i++) {
  cardHearts[i].addEventListener("click", function () {
    heart++;
    heartVal.innerText = heart;
  });
}

for(let i=0; i<copyBtns.length; i++) {
  copyBtns[i].addEventListener("click", function () {
    copy++;
    copyVal.innerText = copy;
  });
}
