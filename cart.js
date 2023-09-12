document.addEventListener("DOMContentLoaded", function () { //När HTML blivit helt parsat


const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("productId");
const productTitle = urlParams.get("productTitle");

console.log(`productId: ${productId}, productTitle: ${productTitle}, were succesfully recieved`);


const orderForm = document.getElementById("orderform"); //Kod fungerade ej innan för att innehåll i form behövde hämtas like this 
const orderSubmitButton = document.getElementById("orderSubmitButton");

const customerProductId = orderForm.elements["customerProductId"];
  const customerProductTitle = orderForm.elements["customerProductTitle"];

  customerProductId.value = productId;
  customerProductTitle.value = productTitle;
  








orderSubmitButton.addEventListener("click", (e) => {
    e.preventDefault(); //Hindrar default form sub
    console.log ("this is the current state of producttitle" + productTitle.value);

    const fullName = document.getElementById("customerFullName").value;
    const email = document.getElementById("customerEmail").value;
    const selectedShippingOption = document.getElementById("deliveryOption").value;
    const address = document.getElementById("customerAddress").value;
    

    const orderData = {
        fields: {
          fullName: { stringValue: fullName },
          email: { stringValue: email },
          selectedShippingOption: { stringValue: selectedShippingOption },
          address: { stringValue: address },
          productId: { stringValue: customerProductId.value },
          productTitle: { stringValue: customerProductTitle.value },
        },
      };
    
    postOrderData(orderData);
}); });


function postOrderData(orderData){


    const firestoreCollectionURL = "https://firestore.googleapis.com/v1/projects/new-javascript-api-4d376/databases/(default)/documents/orders";
console.log("Sending orderData:", orderData);
    fetch(firestoreCollectionURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData), //objekt -> JSON
        
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to post order data.");
            }
        })
        .then((data) => {
            
            console.log("Order data posted:", data);
            alert("Order submitted successfully!");
        })
        .catch((error) => {
            console.error("Error:", error, orderData);
            alert("Failed to submit order. Please try again later.");
        });
}



/*

const orderData = {
    fullName,
    email,
    selectedShippingOption,
    address,
    productId: customerProductId.value,
productTitle: customerProductTitle.value,
  };

  */