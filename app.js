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









//objectData.addEventListener("click", myScript);





/*
fetch('https://fakestoreapi.com/products/').then((data) =>{
console.log(data)
return data.json();
})

.then((objectData)=>{
  console.log(objectData[0] + " This is object number one");
let tableData="";
objectData.map((itemValues)=>{
  tableData+=`${itemValues.title} 
  <img src="${itemValues.image}"/>  <br>`

  
  
  ;
});
document.getElementById("items-body").innerHTML=tableData;


}) */




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
  <b>${itemValues.description}
  `;
 
  
});
document.getElementById("items-body").
innerHTML=tableData;
})






















if(Response){
  console.log('Successfully connected!')
} else {
  console.log('Connection error')
}
    

/*
function printJSon(output){
  (console.log(output.categories[i] + "test"));
  output.categoriesEl.innerHTML = output.categoriesEl2.title;

for (let i = 0; i < output.categories.length; i++){
  title.innerHTML = output.categories[i];


}




} */




/*
fetch('https://fakestoreapi.com/products?sort=desc')
            .then(res=>res.json())
            .then(json=>console.log(json))

*/

/*
function printJSon(output){
  (console.log(output.programs[17].email));
  email.innerHTML = output.programs[17].email;



  for (let i = 0; i < output.category.length; i++) {
    progImageEl.innerHTML = output.programs[i].programimage;

    textEl.innerHTML += "<li>" + output.programs[i].name + "<br>" + output.programs[i].description + "</li>" +  
     "<img height=200px src=" + output.programs[i].programimage + ">" + "<br>";
    
console.log(output.programs[i].name)
       .then(Response => Response.json())
  .then(json=>console.log(json))


*/




/*
function printJSon(output){
  (console.log(output.programs[17].email));
  email.innerHTML = output.programs[17].email;



  for (let i = 0; i < output.category.length; i++) {
    progImageEl.innerHTML = output.programs[i].programimage;

    textEl.innerHTML += "<li>" + output.programs[i].name + "<br>" + output.programs[i].description + "</li>" +  
     "<img height=200px src=" + output.programs[i].programimage + ">" + "<br>";
    
console.log(output.programs[i].name)
    





if(Response.fetch){
  console.log('Successfully connected!')
} else {
  console.log('Connection error')
}
    

function printJSon(output){
  (console.log(output.categories[i] + "test"));
  output.categoriesEl.innerHTML = output.categoriesEl2.title;

for (let i = 0; i < output.categories.length; i++){
  title.innerHTML = output.categories[i];


}


*/