import { db } from './firebase-db.js';
"use strict";


const orderId = document.getElementById("admin-orderId")
const fullNameEl = document.getElementById("admin-name");
const emailEl = document.getElementById("admin-email");
const addressEl = document.getElementById("admin-address");
const productIdEl = document.getElementById("admin-productId")
const shippingEl = document.getElementById("admin-shipping");
const adminSectionEl = document.getElementById("adminSection");


fetch("https://firestore.googleapis.com/v1/projects/new-javascript-api-4d376/databases/(default)/documents/orders") //rätt nu men får 403
.then(res => res.json())
.then(data => getAdminContent(data))
.catch(error => console.log(error));






function updateOrderData(name){
    const orderId = idEl.value;
    const customerName = fullNameEl.value;
    const customerEmail = emailEl.value;
    const customerAddress = addressEl.value;
    const shippingMethod = shippingEl.value;

let body = JSON.stringify(


    {
        "fields": {

            "idproduct": {
                "arrayValue": {
                    "values": orderId.split(",").map(id => ({"stringValue": id.trim()}))
                },

            "Name": { 
                "stringValue": customerName
            },
            "email": {
                "stringValue": customerEmail
            },
            "address": {
                "stringValue": customerAddress
            },
            "shipping": {
                "stringValue": shippingMethod
            }
            
            }
        } 
    } 


)
console.log("Updating function active.... Beginning fetch");

fetch("https://firestore.googleapis.com/v1/" + name, {
  
method: "PATCH",
headers: {

  "Content-type": "application/json"

},

body: body

})
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log(error));
console.log(body)

console.log("Fetch complete! user updated")


}


function getAdminContent(content){

    const contDocs = content.documents;
    let documentOrderID = '';

    if (content.name) {
      const fullDocsPath = content.name;
      
      const parts = fullDocsPath.split('/');
      documentOrderID = parts[parts.length - 1];
      
      console.log("Extracted orderID:", documentOrderID);
    } else {
      console.log("Content name is undefined.");
    }

for(let content of contDocs) {

    console.log(documentOrderID);
console.log(content);

adminSectionEl.innerHTML += `
        <br>
        <article class="articleFrame">
            <ul class="admin">
                <li> Order Link ID: ${content.name}</li>
                <br>
                <li>Customer Name: ${content.fields.fullName.stringValue}</li>
                <li>Customer Adress: ${content.fields.adress.stringValue}</li>
                <li>Customer Email: ${content.fields.email.stringValue}</li>
                <li>Product ordered: ${content.fields.productId.stringValue}</li>

                
                
            </ul>
            <hr>
                
                <input type="button" value="update order" onClick="update('${content.name}')"> 
        </article>
        `


}

}

//<li>Customer Shipping: ${content.fields.shipping.stringValue}</li> <li>Product IDs: ${(content.fields.productId.arrayValue.values.map(values => values.stringValue))}</li>

/*
constOrdersCollection = db.collectionGroup('orders')
const orderId = content.orderId;


ordersCollection.where(admin.firestore.FieldPath.documentId(), "==", orderId)
  .get()
  .then((querySnapshot) => {
    if (!querySnapshot.empty) {
      const orderDocRef = querySnapshot.docs[0].ref;

    } else {
        console.log("Order not found");
      }
    })
    .catch((error) => {
      console.error("Error retrieving order: ", error);
    });
<input type="button" value="delete order" onClick="deleteUser('${content.name}')">
*/