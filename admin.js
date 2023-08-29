import { db } from './firebase-db.js';




const nameEl = document.getElementById("admin-name");
const addressEl = document.getElementById("admin-address");
const emailEl = document.getElementById("admin-email");
const idEl = document.getElementById("admin-id")
const shippingEl = document.getElementById("admin-shipping");
const adminSectionEl = document.getElementById("adminSection");


fetch("https://firestore.googleapis.com/v1/projects/JavascriptAPIDatabase/databases/(default)/documents/orders/") //rätt nu men får 403
.then(res => res.json())
.then(data => getAdminContent(data))
.catch(error => console.log(error));

function getAdminContent(db)
{

}

