// Github -- https://github.com/mdziahossain/milestone-project-03

// Function 01 -- kilometerToMeter
function kilometerToMeter(kilometer) {
  if (kilometer <= 0) {
    return "Invalid Number!";
  } else {
    var meter = kilometer * 1000;
    return meter;
  }
}

var result = kilometerToMeter(13);
console.log(result);

// Function 02 -- budgetCalculator
function budgetCalculator(watch, phone, laptop) {
  
  var watchCost = 50;
  var phoneCost = 100;
  var laptopCost = 500;

  if (watch < 0 || phone < 0 || laptop < 0) {
    return "Your input is incorrect";
  } else {
    var totalCost = (watchCost * watch) + (phoneCost * phone) + (laptop * laptopCost);
    return totalCost;
  }
}

var output = budgetCalculator(7,4,20);
console.log(output);


// Function 03 -- hotelCost
function hotelCost(days) {
  if (days <= 0) {
    return "Invalid days! Please input correctly!";
  } else if (days <= 10) {
    var totalCost = days * 100;
  } else if (days <= 20) {
    var firstTenDaysCost = 10 * 100;
    var remainingDays = days - 10;
    var remainDaysCost = remainingDays * 80;
    var totalCost = firstTenDaysCost + remainDaysCost;
  } else {
    var firstTenDaysCost = 10 * 100;
    var secondTenDaysCost = 10 * 80;
    var remainingDays = days - 20;
    var remainDaysCost = remainingDays * 50;
    var totalCost = firstTenDaysCost + secondTenDaysCost + remainDaysCost;
  }
  return totalCost;
}

var expense = hotelCost(-10);
console.log(expense);


// Function 04 -- megaFriend
function megaFriend(persons) {

  var str = "";

  for (var i =0; i < persons.length; i++) {
    if (persons[i].length > str.length) {
      str = persons[i];
    }
  }
  return str;
}

var mega = megaFriend(["Jhankar", "Mahbub", "Kankar", "Mahfuz", "Ananta Jalil", "Alam", "Jalil"]);
console.log(mega);