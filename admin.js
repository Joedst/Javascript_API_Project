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

    let adminHTML = ""; 

    for (let content of contDocs) {
        const fullDocsPath = content.name;
        const parts = fullDocsPath.split('/');
        const documentOrderID = parts[parts.length - 1]; //Extraherar dokumentid

        adminHTML += `
            <br>
            <article class="articleFrame">
                <ul class="admin">
                    <li> Order ID: ${documentOrderID}</li>
                    <br>
        `;

        if (content.fields) {
            if (content.fields.fullName && content.fields.fullName.stringValue) {
                adminHTML += `<li>Customer Name: ${content.fields.fullName.stringValue}</li>`;
            }
            if (content.fields.address && content.fields.address.stringValue) {
                adminHTML += `<li>Customer Address: ${content.fields.address.stringValue}</li>`;
            }
            if (content.fields.email && content.fields.email.stringValue) {
                adminHTML += `<li>Customer Email: ${content.fields.email.stringValue}</li>`;
            }
            if (content.fields.productId && content.fields.productId.stringValue) {
                adminHTML += `<li>Product id: ${content.fields.productId.stringValue}</li>`;
            }
            if (content.fields.shipping && content.fields.shipping.stringValue) {
                adminHTML += `<li>Shipping: ${content.fields.shipping.stringValue}</li>`;
            }
        }

        adminHTML += `
            <br>
            <input type="button" value="Delete order" onClick="deleteOrder('${content.name}')">
            </ul>
            <hr>
            </article>
        `;
}

    adminSectionEl.innerHTML = adminHTML;  //Kod nedan har unikt id till deleteOrderButton och en data-document-id som sparar id associerat med den knappen
    const deleteOrderButtons = document.querySelectorAll('#deleteOrderButton');
    deleteOrderButtons.forEach(button => {
        button.addEventListener('click', () => { //Event listener addas till varje knapp, when click -> deleteOrder funktionen
            const documentId = button.getAttribute('data-document-id');
            deleteOrder(documentId);
        });
    });
}




function deleteOrder(documentId) {

    document.getElementById('orderUpdateButton');
    
    const firestoreDocumentURL = `https://firestore.googleapis.com/v1/projects/new-javascript-api-4d376/databases/(default)/documents/orders/${documentId}`;

    fetch(firestoreDocumentURL, {
        method: "DELETE", 
    })
    .then(res => {
        if (res.status === 204) {
            
            console.log("Document deleted successfully.");
            
            const orderElement = document.querySelector(`[data-order-id="${documentId}"]`); //Tar bort HTML elementen associerade med ordern också:
            if (orderElement) {
                orderElement.remove();
            }

            location.reload(); //Refreshar hemsidan efter deletion
        } else {
            console.log("Failed to delete document.");
        }
    })
    .catch(error => console.log(error));
}



