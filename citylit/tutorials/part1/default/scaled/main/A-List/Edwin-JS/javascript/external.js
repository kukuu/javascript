
function joinAndInject() {
  var fruits = ["banana", "orange", "apple", "mango"];
  var x = document.getElementById("demo");
  x.innerHTML = fruits.join();
}

function popAndInject() {
  var fruits = ["banana", "orange", "apple", "mango"];
  fruits.pop();
  var x = document.getElementById("demo");
  x.innerHTML = fruits.join();
}

function pushAndInject() {

}

function substringDemo(targetID) {
  var str="Hello World!";
  var x = document.getElementById(targetID);
  x.innerHTML = str.substring(3) + "<br/>" + str.substring(3,7);
  // document.write(str.substring(3) + "<br/>"); // returns "lo world!"
  // document.write(str.substring(3,7)); // return "io w"

}

function sortAscending(targetID) {
  var points=[40, 100, 1, 5, 25, 10];
  points.sort(function(a,b) {
    return a-b;
  });
  var x = document.getElementById(targetID);
  x.innerHTML = points;
}
function sortDescending(targetID) {
  var points=[40, 100, 1, 5, 25, 10];
  points.sort(function(a,b) {
    return b-a;
  });
  var x = document.getElementById(targetID);
  x.innerHTML = points;
}

function sortAndReverse(targetID) {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.sort();
  fruits.reverse();
  var x = document.getElementById(targetID);
  x.innerHTML = fruits;
}

function spliceDemo(targetID) {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.splice(1,2, "Lemon", "Kiwi");
  var x = document.getElementById(targetID);
  x.innerHTML = fruits;
}
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

function howMany(selectedItem) {
  var numberSelected = 0;
  for (var i = 0; i < selectedItem.options.length; i++) {
    if(selectedItem.options[i].selected)
      numberSelected++;
  }
  return numberSelected;
}

function timeGreeting(targetID) {
  var now = new Date();
  var x = document.getElementById(targetID);
  var output;
  hourOfDay = now.getHours();
  minuteOfDay = now.getMinutes();
  secondsOfDay = now.getSeconds();
  output = "<h2>" + hourOfDay + ":" + minuteOfDay + ":" + secondsOfDay + "</h2>" +
  "<p>";
  if (hourOfDay <10) {
    output = output + "Good morning";
  }
  else if ((hourOfDay >= 14) && (hourOfDay<= 17)) {
    output = output + "Good afternoon";
  }
  else if (hourOfDay >= 17) {
    output = output + "Good day";
  }
  output = output + "</p>";

  x.innerHTML = output;
}

function validate() {
  if (document.f.fname.value == '') {
    alert('Enter first name');
    return;
  }
  else if (document.f.lname.value == '') {
    alert('Enter last name');
    return;
  }
  else if (document.f.email.value == '') {
    alert('Enter email');
    return;
  }
  var subNow = confirm('Do you want to submit now?');
  if (subNow) {
    document.f.submit();
    document.f.fname.value = '';
    document.f.lname.value = '';
    document.f.email.value = '';
  }
  else {
    return;
  }
}
function poll(targetID) {
  var f = document.getElementById("cf");
  for (var i = 0; i < f.rad1.length; i++) {
    if (f.rad1[i].checked) {
      var x = document.getElementById(targetID);
      x.bgColor = f.rad1[i].value;
      document.bgColor = f.rad1[i].value;
    }
  }
}

function mypoll() {
  var f = document.getElementById("cf");
  for (var i = 0; i < f.rad1.length; i++) {
    if (f.rad1[i].checked) {
      // var x = document.getElementById(targetID);
      // x.bgColor = document.f.rad1[i].value;
      document.bgColor = f.rad1[i].value;
    }
  }
}

function timesTable(targetID) {
  var x = document.getElementById(targetID);
  var tab = "<table border='1' width='50%'>";
  for (var rows=1; rows < 13; rows++) {
    tab = tab + "<tr>";
    for (var cols=1; cols < 13; cols++) {
      tab = tab + "<td>" + (rows * cols) + "</td>";
    }
    tab = tab + "</tr>";
  }
  tab = tab + "</table>";
  console.log(tab);
  x.innerHTML = tab;
}
