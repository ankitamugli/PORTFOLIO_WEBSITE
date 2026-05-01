let first = document.getElementsByTagName("input")[0];
let second = document.getElementsByTagName("input")[1];
let third = document.getElementsByTagName("input")[2];
let four = document.getElementsByTagName("input")[3];
let submit = document.getElementsByTagName("button")[0];

let names = document.getElementsByClassName("n")[0];
let contact = document.getElementsByClassName("c")[0];
let email = document.getElementsByClassName("e")[0];

let cards = document.getElementsByClassName("cards")[0];

submit.addEventListener("click", () => {
  let con = confirm("Do you want to submit:");
  if (con == true) {
    if (
      first.value.length < 1 ||
        second.value.length < 1 ||
        third.value.length != 10 ||
        four.value.length < 1 ||
      isNaN(third.value)
    ) {
      alert("enter proper inputs");
    } else {
    cards.innerHTML =`
    <div class="card">
            <h1> Thank your for contacting me..!!</h1>
           <h1>Ms/Mr: <span class="n">${first.value.concat(second.value)}</span></h1>
            <h1>contact: <span class="c">${third.value}</span></h1>
                  <h1>email: <span class="e">${four.value}</span></h1>
        </div>
    `
      first.value =""
      second.value =""
      third.value = ""
      four.value = ""
      alert("Thank you for submitting your details")
      console.log(first.value.concat(second.value));
      console.log(third.value);
      console.log(four.value);
    }
  } else {
    alert("you cancled");
  }
});