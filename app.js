"use strict";


import { db } from './firebase-db.js';
import { getFirestore, addDoc, setDoc, doc, collection,  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";





const categoriesEl = document.getElementById("categories");
const categoriesEl2 = document.getElementsByClassName("categories");
const categoriesText = document.getElementById("categoriesText");

const electronicsCategoryBtn = document.createElement("Button")


const purchaseBtn = document.createElement("Button");
purchaseBtn.innerHTML='Buy'
purchaseBtn.addEventListener("click", function() {
  buyingFunction(this.dataset.itemTitle);
  
});




fetch('https://fakestoreapi.com/products/categories').then((data) =>{
console.log(data)
return data.json();


})

.then((objectData)=>{
  console.log(objectData[0] + " This is object number one");
let tableData="";
objectData.map((values)=>{
  tableData+=`<h2>${values}</h2>`;
});
document.getElementById("category-header").innerHTML=tableData;


})


fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>console.log(json))


           
            

           
           


fetch('https://fakestoreapi.com/products/category/electronics').then((data) =>{ //Page display
console.log(data)
return data.json();
})

.then((objectData)=>{
  console.log(objectData[0].title + " This is object number one");
let tableData="";
objectData.map((itemValues)=>{
  tableData+=`<h1>${itemValues.title}</h1>
  <img src="${itemValues.image}"/>  
  <b>${itemValues.price} USD </b> <br>
  <b>${itemValues.description} <br>
  <b>${itemValues.id} <br>
  <button data-item-id="${itemValues.id}" data-item-title="${itemValues.title}" data-item-price="${itemValues.price}" class="buy-btn">Buy</button>
  
  `;

});

document.getElementById('itemValues').innerHTML = tableData;

  const buyButtons = document.querySelectorAll('.buy-btn');
  buyButtons.forEach((button) => {
    
const itemTitle = button.dataset.itemTitle;
const itemPrice = button.dataset.itemPrice;
const itemId = button.dataset.itemId;









button.addEventListener('click', () => {
  addDoc(collection(db.addDoc, 'orders'), {
    itemTitle,
    itemPrice,
    itemId
  }).then(() => {
    alert ('Item added to orders!');
  }).catch((error) => {
    console.error(error);
  });
});
});
});
