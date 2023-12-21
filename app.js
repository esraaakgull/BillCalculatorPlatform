console.log("JS Loaded");
document.addEventListener("DOMContentLoaded", function () {
  // const numberOfPeople = document.getElementById("numberOfPeople");

  let billTotal = 0;
  let percentage = 0;
  let totalNumberOfPeople = 1;

  // total bill onChange
  const totalBill = document.getElementById("totalBill");
  totalBill.addEventListener("input", (event) => {
    console.log(`Value of totalBill changed to: ${event.target.value}`);
    const numberOfPeople = document.getElementById("numberOfPeople");
    console.log("numberOfPeople:", numberOfPeople.value);
    const percentageOfTip = document.getElementById("tip-options");
  });

  // number of people onChange
  const numberOfPeople = document.getElementById("numberOfPeople");
  numberOfPeople.addEventListener("input", (event) => {
    console.log(`Value of numberOfPeople changed to: ${event.target.value}`);
    const totalBill = document.getElementById("totalBill");
    console.log("totalBill", totalBill.value);
    const percentageOfTip = document.getElementById("tip-options");
  });
});
