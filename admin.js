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

let documentOrderID = '';




orderUpdateButtonEl.addEventListener('click', () => {
    console.log("Update order was clicked"); 
    updateOrderData();
});

function updateOrderData() {
    const documentId = orderId.value; 
    const customerName = fullNameEl.value;
    const customerEmail = emailEl.value;
    const customerAddress = addressEl.value;
    const productID = productIdEl.value;
    const selectedShippingOption = shippingEl.value;

    console.log("This is documentiD" + documentId);
    

    let body = JSON.stringify({
        "fields": {
            "fullName": {
                "stringValue": customerName
            },
            "email": {
                "stringValue": customerEmail
            },
            "address": {
                "stringValue": customerAddress
            },
            "productId": {
                "stringValue": productID
            },
            "shipping": {
                "stringValue": selectedShippingOption
            }
        }
    });
    console.log("This is documentid " + documentId);
    console.log("Updating function active.... Beginning fetch");

    // Construct the Firestore document URL with the retrieved documentId
    const firestoreDocumentURL = `https://firestore.googleapis.com/v1/projects/new-javascript-api-4d376/databases/(default)/documents/orders/${documentId}`;

    fetch(firestoreDocumentURL, {
        method: "PATCH", // Use PATCH to update an existing document
        headers: {
            "Content-type": "application/json"
        },
        body: body
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        console.log("Fetch complete! order updated");
    })
    .catch(error => console.log(error));
}
function getAdminContent(content) {
    const contDocs = content.documents;

    if (content.name) {
        const fullDocsPath = content.name;
        const parts = fullDocsPath.split('/');
        const documentOrderID = parts[parts.length - 1]; 
        console.log("Extracted orderID:", documentOrderID);

        let adminHTML = ""; // Initialize an empty string

        for (let content of contDocs) {
            console.log(documentOrderID);
            console.log(content);

            adminHTML += `
                <br>
                <article class="articleFrame">
                    <ul class="admin">
                        <li> Order ID: ${documentOrderID}</li>
                        <br>
                        <li>Customer Name: ${content.fields.fullName.stringValue}</li>
                        <li>Customer Address: ${content.fields.address.stringValue}</li>
                        <li>Customer Email: ${content.fields.email.stringValue}</li>
                        <li>Product id: ${content.fields.productId.stringValue}</li>
                        <li>Shipping: ${content.fields.shipping.stringValue}</li>
                        <br>
                        <input type="button" value="Delete order" onClick="deleteOrder('${content.name}')">
                    </ul>
                    <hr>
                </article>
            `;
        }

        adminSectionEl.innerHTML = adminHTML; // Set the innerHTML after the loop
    } else {
        console.log("Content name is undefined.");
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