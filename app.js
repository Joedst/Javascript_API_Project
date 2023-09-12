"use strict";


const categoriesEl = document.getElementById("categories");
const categoriesEl2 = document.getElementsByClassName("categories");
const categoriesText = document.getElementById("categoriesText");

const electronicsCategoryBtn = document.createElement("Button")









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


           
function redirectToOrderPage(productId, productTitle) {
  console.log("Starting redirectToOrderPage function")
  
  setTimeout(() => {
    window.location.href = `cart.html?productId=${encodeURIComponent(productId)}&productTitle=${encodeURIComponent(productTitle)}`;
  }, 2000);
  
}



fetch('https://fakestoreapi.com/products/category/electronics').then((data) =>{ //Page display
console.log(data)
return data.json();
})

.then((objectData) => {
  // ...

  const tableData = document.getElementById('itemValues');

  objectData.forEach((itemValues) => {
    const productItem = document.createElement('div');

    productItem.innerHTML = `
      <h1>${itemValues.title}</h1>
      <img src="${itemValues.image}" />
      <b>${itemValues.price} USD </b> <br>
      <b>${itemValues.description} <br>
      <b>${itemValues.id} <br>
    `;

    const buyButton = document.createElement('button');
    buyButton.textContent = 'Buy';

    buyButton.addEventListener('click', () => {
      console.log("Redirecting: ", itemValues.title)
      redirectToOrderPage(itemValues.id, itemValues.title);
    });

    productItem.appendChild(buyButton); 
    tableData.appendChild(productItem); 
  });
});





//<button data-item-id="${itemValues.id}" data-item-title="${itemValues.title}" data-item-price="${itemValues.price}" class="buy-btn" onClick="redirectToOrderPage('${itemValues.id}', '${itemValues.title}')">Buy</button> 





/*


.then((objectData)=>{
  console.log(objectData[0].title + " This is object number one");
let tableData="";
objectData.map((itemValues)=>{
  tableData+=`<h1>${itemValues.title}</h1>
  <img src="${itemValues.image}"/>  
  <b>${itemValues.price} USD </b> <br>
  <b>${itemValues.description} <br>
  <b>${itemValues.id} <br>
 
  
  
  `;
  const buyButton = document.createElement('button');
        buyButton.textContent = 'Buy';
        buyButton.addEventListener('click', () => {
            redirectToOrderPage(itemValues.id, itemValues.title);
        });
        tableData += buyButton.outerHTML;

});

*/ 