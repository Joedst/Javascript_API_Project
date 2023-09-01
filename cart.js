

//const orderId = document.getElementById("admin-orderId")
const fullNameEl = document.getElementById("customerFullName");
const emailEl = document.getElementById("customerEmail");
const addressEl = document.getElementById("CustomerAdress");
const productIdEl = document.getElementById("productId")
const shippingEl = document.getElementById("deliveryOption");
const orderSubmitButtonEl = document.getElementById("orderSubmitButton");
//const adminSectionEl = document.getElementById("adminSection");






function submitOrder()

{

    
const fullName = fullNameEl.value.trim();
const email = emailEl.value.trim();
const address = addressEl.value.trim();
const shipping = shippingEl.value.trim();



if (!fullName || !email || !address || !shipping) {
    console.log("Some or all customer info is missing")
    return;
}


const idproducts = productarray.map(content => {
    return {
        "stringValue": content.id 
    }
});

let body = JSON.stringify(
    {
    "fields": {
        "fullName": { 
            "stringValue": fullName
        },
        "email": {
            "stringValue": email
        },
        "address": {
            "stringValue": address
        },
        "shipping": {
            "stringValue": shipping
        },
        "idproduct": {
            "arrayValue": {
                "values": idproducts
            } 
        }
    }   
}
);


fetch("https://firestore.googleapis.com/v1/projects/new-javascript-api-4d376/databases/(default)/documents/orders", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: body
})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
    
    console.log(body);

    localStorage.clear();   //rensar localstorage efter post
    setTimeout(() => location.reload(), 3000); //reloadar sidan 3 sek efter post

};











orderSubmitButton.addEventListener('click', (e) => {

    if (customerEmail.value === '' || customerEmail.value == null) {
        console.log("Button was clicked");
        console.log("User not entering contactable information")
        alert("Email have to be inserted so we may respond to you!");
    } else {
        console.log("Valid message sent");
        orderSubmitButton.innerHTML = "<h3> Message was sent!"
    }
}
)



