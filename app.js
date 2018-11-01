
// // var hours = ['6AM', '7AM', '8AM', '9 AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM']

// var pikeStore = {
//   hours:  ['6AM', '7AM', '8AM', '9 AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'],
//   min:  23,
//   max: 63,
//   hours: 15, 
//   avgCookies: 6.3,
//   custPerHour: [],
//   cookiesTotal: [],




// randomCust: function(min, max) {
//     for (var i = 0; i < this.hours.length; i++) {
//       var custPerHour = Math.floor(Math.random() * (this.max - this.min)) + 
//       this.min;
//       this.Cust.push(custPerHour);
//     }
//   },
  
// cookieCount: function(avgCookies) {
//   for ( var i = 0; i < hours.length; i++){
//     var avgCookiesPerHour = Math.floor(this.avgCookies * this.custPerHour[i]);
//     this.cookiesTotal.push(this.avgCookiesPerHour);
//     this.cookiesTotal += avgCookiesPerHour

//   }
// }
  
// }
// pikeStore.randomCust();
// pikeStore.cookiesTotal();

var pike = {  //name of function
  storeName: 'First and Pike', // name of store
  minCustPerHour: 3, // minimum customers per day
  maxCustPerHour: 65, //maximum customers per day 
  avgCookiesPerCust: 6.3, // average number of cookies a customer buys
  custPerHour: [], // number of customers that come in per hour
  cookiesPerHour: [], // cookies sold per hour
  hoursOfOps: ['6AM', '7AM', '8AM', '9 AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'], //array of hours of operation
  dailyTotal: 0,
  randomCustPerHour: function(min, max) { //function to generate number of customers
    for(var i = 0; i < this.hoursOfOps.length; i++) { //set paramter for how many times function will run based on array length
      var randomCust = Math.floor(Math.random() * (max - min + 1) + min); // generates a random down to nearest whole number based on the min and max of the store. Adds the min twice to ensure the output is never below 23. 
      this.custPerHour.push(randomCust); // from variable randCust we get the average number of customers per hour.
    }
  },
  hourlySales: function() { // function to find the number of cookies sold per hour based the generated customers per hour
    // Line below will populate custPerHour array
    this.randomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust); // produces number of cookies per hour sold from the average number of cookies per person time the generated number of customers per hour.
      this.cookiesPerHour.push(perHour); // from varible perHour, the number of cookies per customer is generated based on the number of customers generated from the random customers per hour function 

      // this.dailyTotal = this.dailyTotal + perHour;
      this.dailyTotal += perHour; //
    }
  },
  render: function() {
    // Line below will generate hourly sales, which also generates customers per hour
    this.hourlySales();

    // this.hoursOfOps = ['6a', '7a', '8a']
    // this.custPerHour = [24, 55, 33]
    // this.cookiesPerHour = [128, 222, 332]

    // everthing below this line I don't understand yet.
    var mainEl = document.getElementById('main-content');
    var containerEl = document.createElement('section');

    var headingEl = document.createElement('h3'); 
    headingEl.textContent = this.name;
    containerEl.appendChild(headingEl);

    var ulEl = document.createElement('ul');

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hoursOfOps[i]}: ${this.cookiesPerHour[i]} cookies`; // '6am: 23 cookies'
      ulEl.appendChild(liEl);
    }

    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.dailyTotal} cookies`;
    ulEl.appendChild(totalEl);

    containerEl.appendChild(ulEl);
    mainEl.appendChild(containerEl);
  },
}; 
var seatac = {  //name of function
  storeName: 'SeaTac Airport', // name of store
  minCustPerHour: 3, // minimum customers per day
  maxCustPerHour: 24, //maximum customers per day 
  avgCookiesPerCust: 1.2, // average number of cookies a customer buys
  custPerHour: [], // number of customers that come in per hour
  cookiesPerHour: [], // cookies sold per hour
  hoursOfOps: ['6AM', '7AM', '8AM', '9 AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'], //array of hours of operation
  dailyTotal: 0,
  randomCustPerHour: function(min, max) { //function to generate number of customers
    for(var i = 0; i < this.hoursOfOps.length; i++) { //set paramter for how many times function will run based on array length
      var randomCust = Math.floor(Math.random() * (max - min + 1) + min); // generates a random down to nearest whole number based on the min and max of the store. Adds the min twice to ensure the output is never below 23. 
      this.custPerHour.push(randomCust); // from variable randCust we get the average number of customers per hour.
    }
  },
  hourlySales: function() { // function to find the number of cookies sold per hour based the generated customers per hour
    // Line below will populate custPerHour array
    this.randomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust); // produces number of cookies per hour sold from the average number of cookies per person time the generated number of customers per hour.
      this.cookiesPerHour.push(perHour); // from varible perHour, the number of cookies per customer is generated based on the number of customers generated from the random customers per hour function 

      // this.dailyTotal = this.dailyTotal + perHour;
      this.dailyTotal += perHour; //
    }
  },
  render: function() {
    // Line below will generate hourly sales, which also generates customers per hour
    this.hourlySales();

    // this.hoursOfOps = ['6a', '7a', '8a']
    // this.custPerHour = [24, 55, 33]
    // this.cookiesPerHour = [128, 222, 332]

    // everthing below this line I don't understand yet. //
    var mainEl = document.getElementById('main-content');
    var containerEl = document.createElement('section');

    var headingEl = document.createElement('h3'); 
    headingEl.textContent = this.name;
    containerEl.appendChild(headingEl);

    var ulEl = document.createElement('ul');

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hoursOfOps[i]}: ${this.cookiesPerHour[i]} cookies`; // '6am: 23 cookies'
      ulEl.appendChild(liEl);
    }

    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.dailyTotal} cookies`;
    ulEl.appendChild(totalEl);

    containerEl.appendChild(ulEl);
    mainEl.appendChild(containerEl);
  },
}; 
var seattle = {  //name of function
  storeName: 'Seattle Center', // name of store
  minCustPerHour: 11, // minimum customers per day
  maxCustPerHour: 38, //maximum customers per day 
  avgCookiesPerCust: 3.7, // average number of cookies a customer buys
  custPerHour: [], // number of customers that come in per hour
  cookiesPerHour: [], // cookies sold per hour
  hoursOfOps: ['6AM', '7AM', '8AM', '9 AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'], //array of hours of operation
  dailyTotal: 0,
  randomCustPerHour: function(min, max) { //function to generate number of customers
    for(var i = 0; i < this.hoursOfOps.length; i++) { //set paramter for how many times function will run based on array length
      var randomCust = Math.floor(Math.random() * (max - min + 1) + min); // generates a random down to nearest whole number based on the min and max of the store. Adds the min twice to ensure the output is never below 23. 
      this.custPerHour.push(randomCust); // from variable randCust we get the average number of customers per hour.
    }
  },
  hourlySales: function() { // function to find the number of cookies sold per hour based the generated customers per hour
    // Line below will populate custPerHour array
    this.randomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust); // produces number of cookies per hour sold from the average number of cookies per person time the generated number of customers per hour.
      this.cookiesPerHour.push(perHour); // from varible perHour, the number of cookies per customer is generated based on the number of customers generated from the random customers per hour function 

      // this.dailyTotal = this.dailyTotal + perHour;
      this.dailyTotal += perHour; //
    }
  },
  render: function() {
    // Line below will generate hourly sales, which also generates customers per hour
    this.hourlySales();


// NOTE: Removed the code from class06 (you can reference it in that class demo directory if need be)


// NOTE: FOLLOWING CODE IS DEFINITION OF CODE. YOU WILL SEE ANOTHER NOTE DOWN A WAYS THAT STATES WHEN AND WHERE WE START EXECUTING CODE.



var cookieStand = []; // Creates an empty container (array) to hold Turtles when they are instantiated

// Want to find the number of cookies sold per hour per customer based based on the store traffic utilizing an object with the methods inside to yeild results.
// Known info includes min and max customers for each store, hours of operation, average cookies sold per customer.  
// This is our blueprint
function CookieStand(name, hoursOfOpp, minCust, maxCust, avgCookiesPerHour, custPerHour,  arrIn) {

  console.log('This', this); // This log shows the current contextual reference of the `this` keyword

 

    // this.hoursOfOps = ['6a', '7a', '8a']
    // this.custPerHour = [24, 55, 33]
    // this.cookiesPerHour = [128, 222, 332]

    // everthing below this line I don't understand yet. //
    var mainEl = document.getElementById('main-content');
    var containerEl = document.createElement('section');

    var headingEl = document.createElement('h3'); 
    headingEl.textContent = this.name;
    containerEl.appendChild(headingEl);

    var ulEl = document.createElement('ul');

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hoursOfOps[i]}: ${this.cookiesPerHour[i]} cookies`; // '6am: 23 cookies'
      ulEl.appendChild(liEl);
    }

    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.dailyTotal} cookies`;
    ulEl.appendChild(totalEl);

    containerEl.appendChild(ulEl);
    mainEl.appendChild(containerEl);
  },
}; 

var capHill = {  //name of function
  storeName: 'Capitol Hill', // name of store
  minCustPerHour: 20, // minimum customers per day
  maxCustPerHour: 38, //maximum customers per day 
  avgCookiesPerCust: 2.3, // average number of cookies a customer buys
  custPerHour: [], // number of customers that come in per hour
  cookiesPerHour: [], // cookies sold per hour
  hoursOfOps: ['6AM', '7AM', '8AM', '9 AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'], //array of hours of operation
  dailyTotal: 0,
  randomCustPerHour: function(min, max) { //function to generate number of customers
    for(var i = 0; i < this.hoursOfOps.length; i++) { //set paramter for how many times function will run based on array length
      var randomCust = Math.floor(Math.random() * (max - min + 1) + min); // generates a random down to nearest whole number based on the min and max of the store. Adds the min twice to ensure the output is never below 23. 
      this.custPerHour.push(randomCust); // from variable randCust we get the average number of customers per hour.
    }
  },
  hourlySales: function() { // function to find the number of cookies sold per hour based the generated customers per hour
    // Line below will populate custPerHour array
    this.randomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust); // produces number of cookies per hour sold from the average number of cookies per person time the generated number of customers per hour.
      this.cookiesPerHour.push(perHour); // from varible perHour, the number of cookies per customer is generated based on the number of customers generated from the random customers per hour function 

      // this.dailyTotal = this.dailyTotal + perHour;
      this.dailyTotal += perHour; //
    }
  },
  render: function() {
    // Line below will generate hourly sales, which also generates customers per hour
    this.hourlySales();

    // this.hoursOfOps = ['6a', '7a', '8a']
    // this.custPerHour = [24, 55, 33]
    // this.cookiesPerHour = [128, 222, 332]

    // everthing below this line I don't understand yet. //
    var mainEl = document.getElementById('main-content');
    var containerEl = document.createElement('section');

    var headingEl = document.createElement('h3'); 
    headingEl.textContent = this.name;
    containerEl.appendChild(headingEl);

    var ulEl = document.createElement('ul');

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hoursOfOps[i]}: ${this.cookiesPerHour[i]} cookies`; // '6am: 23 cookies'
      ulEl.appendChild(liEl);
    }

    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.dailyTotal} cookies`;
    ulEl.appendChild(totalEl);

    containerEl.appendChild(ulEl);
    mainEl.appendChild(containerEl);
  },
}; 
var alki = {  //name of function
  storeName: 'Alki', // name of store
  minCustPerHour: 2, // minimum customers per day
  maxCustPerHour: 16, //maximum customers per day 
  avgCookiesPerCust: 4.6, // average number of cookies a customer buys
  custPerHour: [], // number of customers that come in per hour
  cookiesPerHour: [], // cookies sold per hour
  hoursOfOps: ['6AM', '7AM', '8AM', '9 AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'], //array of hours of operation
  dailyTotal: 0,
  randomCustPerHour: function(min, max) { //function to generate number of customers
    for(var i = 0; i < this.hoursOfOps.length; i++) { //set paramter for how many times function will run based on array length
      var randomCust = Math.floor(Math.random() * (max - min + 1) + min); // generates a random down to nearest whole number based on the min and max of the store. Adds the min twice to ensure the output is never below 23. 
      this.custPerHour.push(randomCust); // from variable randCust we get the average number of customers per hour.
    }
  },
  hourlySales: function() { // function to find the number of cookies sold per hour based the generated customers per hour
    // Line below will populate custPerHour array
    this.randomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust); // produces number of cookies per hour sold from the average number of cookies per person time the generated number of customers per hour.
      this.cookiesPerHour.push(perHour); // from varible perHour, the number of cookies per customer is generated based on the number of customers generated from the random customers per hour function 

      // this.dailyTotal = this.dailyTotal + perHour;
      this.dailyTotal += perHour; //
    }
  },
  render: function() {
    // Line below will generate hourly sales, which also generates customers per hour
    this.hourlySales();

    // this.hoursOfOps = ['6a', '7a', '8a']
    // this.custPerHour = [24, 55, 33]
    // this.cookiesPerHour = [128, 222, 332]

    // everthing below this line I don't understand...yet. //
    var mainEl = document.getElementById('main-content');
    var containerEl = document.createElement('section');

    var headingEl = document.createElement('h3'); 
    headingEl.textContent = this.name;
    containerEl.appendChild(headingEl);

    var ulEl = document.createElement('ul');

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hoursOfOps[i]}: ${this.cookiesPerHour[i]} cookies`; // '6am: 23 cookies'
      ulEl.appendChild(liEl);
    }

    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.dailyTotal} cookies`;
    ulEl.appendChild(totalEl);

    containerEl.appendChild(ulEl);
    mainEl.appendChild(containerEl);
  },
}; 

