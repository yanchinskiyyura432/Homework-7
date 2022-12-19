//task 1

// let window1 = window.open("", "", "width = 300, height = 300");
// function winRes() {
//   window1.resizeTo(500, 500);
//   console.log("Done");
// }
// setTimeout(winRes, 2000);

// setTimeout(function () {
//   window1.moveTo(200, 200);
// }, 4000);
// setTimeout(function () {
//   window1.close();
// }, 6000);

//task 2

// function changeTxt() {
//   let txt = document.getElementById("text");
//   txt.style.color = "orange";
//   txt.style.fontSize = "20px";
//   txt.style.fontFamily = "Comic Sans MS";
// }

//task 3

// function Btn1() {
//   document.body.style.backgroundColor = "blue";
// }
// function Btn2() {
//   document.body.style.backgroundColor = "pink";
// }
// function Btn3Hold() {
//   document.body.style.backgroundColor = "white";
// }
// function Btn3Release() {
//   document.body.style.backgroundColor = "brown";
// }

//task 4
// function btnClck() {
//   let selectedName = document.getElementById("list");
//   selectedName.remove(this.selectedIndex);
// }

// task 5
// function mouseHover() {
//   document.getElementById("txt").innerHTML = `Mouse on me`;
// }
// function mouseOut() {
//   document.getElementById("txt").innerHTML = `Mouse is not on me`;
// }
// function mouseClick() {
//   document.getElementById("txt").innerHTML = `I was pressed`;
// }

// task 6

// function showSize() {
//   let wdHeight = window.innerHeight;
//   let wdWidth = window.innerWidth;
//   document.getElementById("txt").innerHTML =
//     "Width : " + wdWidth + ", " + "Height : " + wdHeight;
// }
// window.addEventListener("resize", showSize);

// task 7

// let gerCities = ["Berlin", "Frankfurt", "Hamburg", "Düsseldorf"];
// let usaCities = ["Washington", "Chikago", "New-York", "Boston"];
// let ukrCities = ["Kyiv", "Lviv", "Odessa", "Kharkiv"];

// let list1 = document.getElementById("country");
// let list2 = document.getElementById("cities");

// function selectCountry(event) {
//   switch (list1.options[list1.selectedIndex].value) {
//     case "ger":
//       list2.options.length = 0;
//       for (let i = 0; i < gerCities.length; i++) {
//         let option = document.createElement("option");
//         option.text = option.value = gerCities[i];
//         list2.add(option);
//       }
//       console.log("Germany selected");
//       break;

//     case "usa":
//       list2.options.length = 0;
//       for (let i = 0; i < usaCities.length; i++) {
//         let option = document.createElement("option");
//         option.text = option.value = usaCities[i];
//         list2.add(option);
//       }
//       console.log("USA selected");
//       break;
//     case "ukr":
//       list2.options.length = 0;
//       for (let i = 0; i < ukrCities.length; i++) {
//         let option = document.createElement("option");
//         option.text = option.value = ukrCities[i];
//         list2.add(option);
//       }
//       console.log("Ukraine selected");
//       break;
//   }
// }

// function changeP() {
//   document.getElementsByTagName("p")[0].innerHTML =
//     list1.options[list1.selectedIndex].text +
//     " " +
//     list2.options[list2.selectedIndex].value;
// }

// // addEventListener("change", selectCountry);
// list1.addEventListener(
//   "change",
//   (event) => {
//     selectCountry(event);
//   },
//   true
// );
// addEventListener("change", changeP);
