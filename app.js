"use strict";

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

//orders/vCCAsefKZ65ciE1MNTD8


function buyingFunction($itemTitle){
  console.log('Object ${itemTitle} was added to purchase');
  //skicka till annan sida

}




fetch('https://fakestoreapi.com/products/category/electronics').then((data) =>{
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
  <b>${itemValues.description} <br>`;
  purchaseBtn.dataset.itemTitle = itemValues.title;
 tableData += purchaseBtn.outerHTML; 
});
document.getElementById("items-body").
innerHTML=tableData;
})


if(Response){
  console.log('Successfully connected!')
} else {
  console.log('Connection error')
}
  