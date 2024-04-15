
let inputForm = document.querySelector("#table");
let input = document.querySelector("#ins");
let table = document.querySelector("#time");

inputForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let tableOf = input.value;

  table.innerHTML = "";

  for (let i = 1; i <= 12; i++) {
  
    const message = `${tableOf} X ${i} = ${tableOf * i}`;

    table.innerHTML += `${message} <br>`;
  }
});

