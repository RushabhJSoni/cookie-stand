'use strict'

const seattle = {
  name: 'seattle',
  min: 23,
  max: 65,
  avgCookies: 6.3,
  totSales: 0,
  cust: [],
  cookiePHr:[],

  avgCust: function(){
    this.cust = randomCust(23,65);   
  },
  avgCookie: function(){
    this.cookiePHr = cookiePerHr(this.cust,this.avgCookies); 
    console.log(this.cookiePHr);
  },

  totalSales: function(){
    this.totSales = totSales(this.cookiePHr);
  },
  
}

const tokyo = {
  name: 'tokyo',
  cust: [],
  min: 3,
  max: 24,
  avgCookies: 1.2,
  cookiePHr:[],
  totSales: 0,
  avgCust: function(){
    this.cust = randomCust(3,24)
  },
  avgCookie: function(){
    this.cookiePHr = cookiePerHr(this.cust,this.avgCookies);
  },
    totalSales: function(){
      this.totSales = totSales(this.cookiePHr);
    }
}

const dubai = {
  name: 'dubai',
  cust: [],
  min: 	11,
  max: 38,
  avgCookies: 3.7,
  cookiePHr: [],
  totSales: 0,
  avgCust: function(){
    this.cust = randomCust(11,38)
  },
  avgCookie: function(){
    this.cookiePHr = cookiePerHr(this.cust,this.avgCookies);
  },
  totalSales: function(){
    this.totSales = totSales(this.cookiePHr);
  }
}

const paris = {
  name:'paris',
  cust: [],
  min: 20,
  max: 	38,
  avgCookies: 2.3,
  cookiePHr: [],
  totSales: 0,
  avgCust: function(){
    this.cust = randomCust(20,38)
  },
  avgCookie: function(){
    this.cookiePHr = cookiePerHr(this.cust,this.avgCookies);
  },
  totalSales: function(){
    this.totSales = totSales(this.cookiePHr);
  }
}

const lima = {
  name: 'lima',
  cust: [],
  min: 2,
  max: 16,
  avgCookies: 4.6,
  cookiePHr: [],
  totSales: 0,
  avgCust: function(){
    this.cust = randomCust(2,16) 
  },
  avgCookie: function(){
    this.cookiePHr = cookiePerHr(this.cust,this.avgCookies);
  },
  totalSales: function(){
    this.totSales = totSales(this.cookiePHr);
  }
}

const timeArray = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ']




function randomCust(a,b){
  let cust1 = [];
  for(let i = 0; i < timeArray.length; i++){
    let z = Math.floor(Math.random() * (b - a + 1) + a);
    console.log(z);
    cust1.push(z);
  }
  //  console.log(`cust1; ${cust1}`);
 return cust1;
}



function cookiePerHr(a,b){
  let finalAvgCookie = [];
  let c = [];
  for(let i = 0; i< timeArray.length; i++){
    c.push(Math.floor(b+=0));
    }  
  for( let j = 0; j <timeArray.length; j++ ) {
  let z = a[j] * c[j] ;
  finalAvgCookie.push(z);
    
  }
  console.log(finalAvgCookie);
  return finalAvgCookie;
}


function totSales(finalAvgCookie) {
  let tot = 0;
  for(let i =0; i< timeArray.length;i++) {
    
    tot = tot + finalAvgCookie[i]
    console.log(finalAvgCookie);
  }
    return tot
}

seattle.avgCust();
tokyo.avgCust();
dubai.avgCust();
paris.avgCust();
lima.avgCust();


seattle.avgCookie();
tokyo.avgCookie();
dubai.avgCookie();
paris.avgCookie();
lima.avgCookie();

seattle.totalSales();
tokyo.totalSales();
dubai.totalSales();
paris.totalSales();
lima.totalSales();

const shopArray = [seattle, tokyo, dubai, paris, lima];

const secStoreElem = document.getElementById('store')

function renderStore(shop){
let articleElem = document.createElement('article')
secStoreElem.appendChild(articleElem);
let imgElem = document.createElement('img');
// imgElem.src = shop.photo;
secStoreElem.appendChild(imgElem);
let h2Elem = document.createElement('h2');
h2Elem.textContent = shop.name;
secStoreElem.appendChild(h2Elem);
let pElem3 = document.createElement('p');
pElem3.textContent = `min Customers:${shop.min}`;
secStoreElem.appendChild(pElem3);
let pElem4 = document.createElement('p');
pElem4.textContent = `max Customers:${shop.max}`;
secStoreElem.appendChild(pElem4);
let pElem2 = document.createElement('p');
// pElem2.textContent = `average Cookies: ${shop.cookiePHr} per hour`;
secStoreElem.appendChild(pElem2);
let pElem = document.createElement('p');
// pElem.textContent = `average customer: ${shop.cust}`;
let pElem5 = document.createElement('p');
pElem5.textContent = `avg Cookies/sale:${shop.avgCookies}`;
secStoreElem.appendChild(pElem5);
secStoreElem.appendChild(pElem);
let ulElem = document.createElement('ul');
secStoreElem.appendChild(ulElem);

for(let i =0; i < timeArray.length; i++){
let liElem = document.createElement('li');
liElem.textContent = `${timeArray[i]}  ${shop.cookiePHr[i]}cookies`
ulElem.appendChild(liElem);

}
let liElem1 = document.createElement('li');
liElem1.textContent = `total sale : ${shop.totSales}`;
ulElem.appendChild(liElem1);

}

for(let i = 0; i < shopArray.length; i++){
  renderStore(shopArray[i]);
}

console.log('hope this works!')