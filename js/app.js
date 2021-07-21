'use strict'

const seattle = {
  name: 'seattle',
  time:0 ,
  cust: 0,
  min: 23,
  max: 65,
  avgCookies: 6.3,
  cookiePHr:0,
  avgCust: function(){
    this.cust = randomCust(23,65) 
  },
  avgCookie: function(){
    this.cookiePHr = Math.floor(cookiePerHr(this.cust,1.2));
  },
  
 

 
}

const tokyo = {
  name: 'tokyo',
  cust: 0,
  min: 3,
  max: 24,
  avgCookies: 1.2,
  cookiePHr: 0,
  avgCust: function(){
    this.cust = randomCust(3,24)
  },
  avgCookie: function(){
    this.cookiePHr = Math.floor(cookiePerHr(this.cust,1.2));
    },

}

const dubai = {
  name: 'dubai',
  cust: 0,
  min: 	11,
  max: 38,
  avgCookies: 3.7,
  cookiePHr: 0,
  avgCust: function(){
    this.cust = randomCust(11,38)
  },
  avgCookie: function(){
    this.cookiePHr = Math.floor(cookiePerHr(this.cust,1.2));
  }

}

const paris = {
  name:'paris',
  cust: 0,
  min: 20,
  max: 	38,
  avgCookies: 2.3,
  cookiePHr: 0,
  avgCust: function(){
    this.cust = randomCust(20,38)
  },
  avgCookie: function(){
    this.cookiePHr = Math.floor(cookiePerHr(this.cust,1.2));
  }
}

const lima = {
  name: 'lima',
  cust: 0,
  min: 2,
  max: 16,
  avgCookies: 4.6,
  cookiePHr: 0,
  avgCust: function(){
    this.cust = randomCust(2,16) 
  },
  avgCookie: function(){
    this.cookiePHr = Math.floor(cookiePerHr(this.cust,1.2));
  }
}

function randomCust(a,b){
  let cust = Math.floor(Math.random() * (b - a + 1) + a);
  console.log(cust);
  return cust;
 }

seattle.avgCust();
tokyo.avgCust();
dubai.avgCust();
paris.avgCust();
lima.avgCust();


const timeArray = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ']



const shopArray = [seattle, tokyo, dubai, paris, lima];

function cookiePerHr(a,b){
  for(let i = 0; i< timeArray.length;i++){
  let z = [a * b];
  console.log(z);
  return z;
  }
}
seattle.avgCookie();
tokyo.avgCookie();
dubai.avgCookie();
paris.avgCookie();
lima.avgCookie();
 

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
pElem2.textContent = `average Cookies: ${shop.cookiePHr} per hour`;
secStoreElem.appendChild(pElem2);
let pElem = document.createElement('p');
pElem.textContent = `average customer: ${shop.cust}`;
let pElem5 = document.createElement('p');
pElem5.textContent = `avg Cookies/sale:${shop.avgCookies}`;
secStoreElem.appendChild(pElem5);
secStoreElem.appendChild(pElem);
let ulElem = document.createElement('ul');
secStoreElem.appendChild(ulElem);
for(let i =0; i < timeArray.length; i++){
let liElem = document.createElement('li');
liElem.textContent = `${timeArray[i]}: ${cookiePerHr[i]}`;
ulElem.appendChild(liElem);

}

}

for(let i = 0; i < shopArray.length; i++){
  renderStore(shopArray[i]);
}

console.log('hope this works!')