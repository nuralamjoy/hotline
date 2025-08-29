const heartVal = document.getElementById("heart-val");
const copyVal = document.getElementById("copy-val");
const coinVal = document.getElementById("coin-val");
const clearBtn = document.getElementById("clear");
const cardHearts = document.getElementsByClassName("card-heart");
const copyBtns = document.getElementsByClassName("copy-btn");
const numbers = document.getElementsByClassName("num");
const callBtns = document.getElementsByClassName("call-btn");
const serviceTitle = document.getElementsByClassName("title-bng");
const historyItems = document.querySelector(".history-items");
const toggleBtn = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebar");

let heart = 0,
  copy = 0,
  coin = 100;
heartVal.innerText = heart;
copyVal.innerText = copy;
coinVal.innerText = coin;

for (let i = 0; i < cardHearts.length; i++) {
  cardHearts[i].addEventListener("click", function () {
    heart++;
    heartVal.innerText = heart;
  });
}

for (let i = 0; i < callBtns.length; i++) {
  callBtns[i].addEventListener("click", function () {
    if (coin >= 2) {
      coin -= 20;
      coinVal.innerText = coin;
      addHistory(
        serviceTitle[i].innerText,
        numbers[i].innerText,
        new Date().toLocaleTimeString("en-GB", { hour12: false })
      );
    } else {
      alert("you have not enough coin for this call ");
    }
  });
}

for (let i = 0; i < copyBtns.length; i++) {
  copyBtns[i].addEventListener("click", function () {
    copy++;
    copyVal.innerText = copy;
    const text = numbers[i].innerText;
    navigator.clipboard.writeText(text);
  });
}

function addHistory(service, number, date) {
  const historyContent = document.createElement("div");
  historyContent.className =
    "history-content flex justify-between items-center bg-white p-2 my-2 rounded shadow";

  const callDetails = document.createElement("div");
  callDetails.className = "call-details flex flex-col";

  const p1 = document.createElement("p");
  p1.innerText = service;

  const p2 = document.createElement("p");
  p2.innerText = number;

  callDetails.appendChild(p1);
  callDetails.appendChild(p2);

  const timeDiv = document.createElement("div");
  timeDiv.className = "time text-sm text-gray-500";
  timeDiv.innerText = date;

  historyContent.appendChild(callDetails);
  historyContent.appendChild(timeDiv);

  historyItems.appendChild(historyContent);
}

clearBtn.addEventListener("click", () => {
  historyItems.innerHTML = "";
});

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
});
