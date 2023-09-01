import { db } from './firebase-db.js';
"use strict";


const orderId = document.getElementById("admin-id")
const fullNameEl = document.getElementById("admin-name");
const emailEl = document.getElementById("admin-email");
const addressEl = document.getElementById("admin-address");
const productIdEl = document.getElementById("admin-productId")
const shippingEl = document.getElementById("admin-shipping");
const adminSectionEl = document.getElementById("adminSection");
const orderUpdateButtonEl = document.getElementById('orderUpdateButton');


fetch("https://firestore.googleapis.com/v1/projects/new-javascript-api-4d376/databases/(default)/documents/orders") 
.then(res => res.json())
.then(data => getAdminContent(data))
.catch(error => console.log(error));




orderUpdateButtonEl.addEventListener('click', () => {
    console.log("Update order was clicked"); 
    updateOrderData('https://firestore.googleapis.com/v1/projects/new-javascript-api-4d376/databases/(default)/documents/orders')
});


function updateOrderData(id){
    const customerId = orderId.value;
    const customerName = fullNameEl.value;
    const customerEmail = emailEl.value;
    const customerAddress = addressEl.value;
    //const shippingMethod = shippingEl.value;
    const productID = productIdEl.value;
    
    
    orderUpdateButtonEl.addEventListener('click', () => {
        let body = JSON.stringify({
            "fields": {
                
                "fullName": { 
                    "stringValue": customerName
                },
                "email": {
                    "stringValue": customerEmail
                },
                "adress": {
                    "stringValue": customerAddress
                },
                
                "productId": {
                    "stringValue": productID
                }
            }
        });

        console.log("Updating function active.... Beginning fetch");

        fetch("https://firestore.googleapis.com/v1/" + id, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: body
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));

        console.log(body);
        console.log("Fetch complete! order updated");

        
    
    });
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
                <li>Customer Address: ${content.fields.adress.stringValue}</li>
                <li>Customer Email: ${content.fields.email.stringValue}</li>
                <li>Product id: ${content.fields.productId.stringValue}</li>
                <li>Shipping: ${content.fields.shipping.stringValue}</li>
                
                
                
                

                <br>
                <input type="button" value="Delete order" onClick="deleteOrder('${content.name}')">
                
            </ul>
            <hr>
                
            
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
<input type="button" value="delete order" onClick="deleteUser('${content.name}')">'

localStorage.clear();   //rensar localstorage efter post
    setTimeout(() => location.reload(), 3000); //reloadar sidan 3 sek efter post
<input type="button" value="update order" onClick="update('${content.name}')"> 

*/