var stores = [];
var hoursOfOps = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Store(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.custPerHour = [];
  this.cookiesPerHour = [];
  this.dailyTotal = 0;

  stores.push(this);
  this.render();
}

Store.prototype.generateRandomCustPerHour = function(min, max) {
  for (var i = 0; i < hoursOfOps.length; i++) {
    var randomCust = Math.floor(Math.random() * (max - min + 1) + min);

    this.custPerHour.push(randomCust);
  }
};

Store.prototype.generateHourlySales = function() {
  // Line below will populate custPerHour array
  this.generateRandomCustPerHour(this.minCust, this.maxCust);

  for (var i = 0; i < hoursOfOps.length; i++) {
    var perHour = Math.round(this.custPerHour[i] * this.avgCookies);
    this.cookiesPerHour.push(perHour);

    // this.dailyTotal = this.dailyTotal + perHour;
    this.dailyTotal += perHour;
  }
};

Store.prototype.render = function() {
  // Line below will generate hourly sales, which also generates customers per hour
  this.generateHourlySales();

  console.log('calling render method');

  var tbodyEl = document.getElementById('tbody');
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = this.name;
  trEl.appendChild(thEl);

  for(var i = 0; i < hoursOfOps.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }

  var totalEl = document.createElement('td');
  totalEl.textContent = this.dailyTotal;
  trEl.appendChild(totalEl);

  tbodyEl.appendChild(trEl);
};


function createTableHeader() {
  var theadEl = document.getElementById('thead');
  var trEl = document.createElement('tr');
  var emptyTh = document.createElement('th');

  trEl.appendChild(emptyTh);

  for(var i = 0; i < hoursOfOps.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hoursOfOps[i];
    trEl.appendChild(thEl);
  }

  var totalEl = document.createElement('th');
  totalEl.textContent = 'Total';
  trEl.appendChild(totalEl);

  theadEl.appendChild(trEl);

}

function createTableFooter() {

  var tfootEl = document.getElementById('tfoot');
  var trEl = document.createElement('tr');

  var totalThEl = document.createElement('th');
  totalThEl.textContent = 'Hourly Totals';
  trEl.appendChild(totalThEl);


  var grandTotal = 0;
  for(var i = 0; i < hoursOfOps.length; i++) {
    var tdEl = document.createElement('td');
    var totals = 0;

    for(var j = 0; j < stores.length; j++) {
      totals += stores[j].cookiesPerHour[i];
    }

    tdEl.textContent = totals;
    trEl.appendChild(tdEl);

    grandTotal += totals;
  }

  var grandTotalEl = document.createElement('td');
  grandTotalEl.textContent = grandTotal;
  trEl.appendChild(grandTotalEl);


  tfootEl.appendChild(trEl);
}

(function run() {
  createTableHeader();
})();

new Store('First and Pike', 23, 65, 6.4);
new Store('SeaTac', 12, 34, 3.4);
new Store('Seattle Center', 3, 5, 4.1);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

createTableFooter();


// var salesFormEl = document.getElementById('sales-form');
// salesFormEl.addEventListener('submit', function() {})

document.getElementById('sales-form').addEventListener('submit', function(event) {
  event.preventDefault();


  var name = event.target.storename.value;
  var minCust = parseInt(event.target.minCust.value);
  var maxCust = parseInt(event.target.maxCust.value);
  var avgCookies = parseInt(event.target.avgCookies.value);

  new Store(name, minCust, maxCust, avgCookies);

  event.target.storename.value = '';
  event.target.minCust.value = '';
  event.target.maxCust.value = '';
  event.target.avgCookies.value = '';


  var tfootEl = document.getElementById('tfoot');
  tfootEl.innerHTML = '';

  createTableFooter();

});

