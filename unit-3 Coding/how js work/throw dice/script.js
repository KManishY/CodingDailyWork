document.getElementById("roll").addEventListener("click", randomFun);
function randomFun() {
   (document.querySelector("#member_1").textContent =
    Math.floor(Math.random() * 6) + 1);
  // console.log(member_1.innerHTML);
  document.querySelector("#member_1").style.color = "black";
   (document.querySelector("#member_2").innerHTML =
    Math.floor(Math.random() * 6) + 1);
  document.querySelector("#member_2").style.color = "black";
  (document.querySelector("#member_3").innerHTML =
    Math.floor(Math.random() * 6) + 1);
  document.querySelector("#member_3").style.color = "black";
  if (
    member_1.innerHTML > member_2.innerHTML &&
    member_1.innerHTML > member_3.innerHTML
  ) {
    member_1.style.color = "green";
  } else if (
    member_1.innerHTML < member_2.innerHTML &&
    member_2.innerHTML > member_3.innerHTML
  ) {
    // console.log("a is big");
    // let a = (document.querySelector("#A").innerText.style = "red");
    member_2.style.color = "green";
    // console.log(member_1.innerHTML);
  } else if (
    member_1.innerHTML < member_3.innerHTML &&
    member_2.innerHTML < member_3.innerHTML
  ) {
    // console.log("a is big");
    // let a = (document.querySelector("#A").innerText.style = "red");
    member_3.style.color = "green";
    console.log(member_1.innerHTML);
  }

}
