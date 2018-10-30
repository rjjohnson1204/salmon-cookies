
var hours = ['6AM', '7AM', '8AM', '9 AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM']

var pikeStore = {
  min:  23,
  max: 63,
  hour: 15, 
  avgCookies: 6.3,
  avgCust: [],
  cookiesTotal: [],




randomCust: function(min, max) {
    for (var i = 0; i < hours.length; i++) {
      var custPerHour = Math.floor(Math.random() * (this.max - this.min)) + 
      this.min;
      this.avgCust.push(custPerHour);
    }
  },
  
cookieCount: function(avgCookies) {
  for ( var i = 0; i < hours.length; i++){
    var avgCookiesPerHour = Math.floor(this.avgCookies * this.custPerHour[i]);
    this.cookiesTotal.push(this.avgCookiesPerHour);
    

  }
},
  
}
pikeStore.randomCust();
pikeStore.cookiesCount();

