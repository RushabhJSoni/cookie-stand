'use strict'

const seattle = {
  name: 'seattle',
  cust: 0,
  min: 23,
  max: 65,
  avgCookies: 6.3,
  avgCust: function(){
    this.cust = randomCust(23,65) + 'per hour'
  }

}

const tokyo = {
  name: 'tokyo',
  cust: 0,
  min: 3,
  max: 24,
  avgCookies: 1.2,
  avgCust: function(){
    this.cust = randomCust(3,24) + 'per hour'
  }

}

const dubai = {
  name: 'dubai',
  cust: 0,
  min: 	11,
  max: 38,
  avgCookies: 3.7,
  avgCust: function(){
    this.cust = randomCust(11,38) + 'per hour'
  }
}

const paris = {
  name:'paris',
  cust: 0,
  min: 20,
  max: 	38,
  avgCookies: 2.3,
  avgCust: function(){
    this.cust = randomCust(20,38) + 'per hour'
  }
}

const lima = {
  name: 'lima',
  cust: 0,
  min: 2,
  max: 16,
  avgCookies: 4.6,
  avgCust: function(){
    this.cust = randomCust(2,16) + ' per hour'
  }
}

function randomCust(a,b){
  let cust = Math.floor(Math.random() * (b - a + 1) + a);
  return cust;
}

seattle.avgCust();
tokyo.avgCust();
dubai.avgCust();
paris.avgCust();
lima.avgCust();

const shopArray = [seattle, tokyo, dubai, paris, lima];

const secStoreElem = document.getElementById('store')

function renderStore(shop){
let articleElem = document.createElement('article')
secStoreElem.appendChild(articleElem);
let imgElem = document.createElement('img');
imgElem.src = shop.photo;
secStoreElem.appendChild(imgElem);
let h2Elem = document.createElement('h2');
h2Elem.textContent = shop.name;
secStoreElem.appendChild(h2Elem);
let pElem = document.createElement('p');
// pElem.textContent = ${shop.min};
// secStoreElem.appendChild(pElem);
pElem.textContent = `average customer: ${shop.cust}`;
secStoreElem.appendChild(pElem);
}

for(let i = 0; i < shopArray.length; i++){
  renderStore(shopArray[i]);
}