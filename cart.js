




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



