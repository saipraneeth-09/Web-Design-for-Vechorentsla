// Your public Stripe API key
const stripe = Stripe('YOUR_PUBLIC_STRIPE_KEY'); // Replace with your actual Stripe public key

const checkoutButton = document.getElementById('checkout-button');
const amountInput = document.getElementById('amount');
const vehicleSelect = document.getElementById('vehicle');
const daysSelect = document.getElementById('days');

// Event listeners for selecting vehicle and days
vehicleSelect.addEventListener('change', updateAmount);
daysSelect.addEventListener('change', updateAmount);
checkoutButton.addEventListener('click', handleCheckout);

function updateAmount() {
    // Get selected vehicle and number of days
    const vehicle = vehicleSelect.value;
    const days = parseInt(daysSelect.value);
    
    // Define the prices for each vehicle
    const vehiclePrices = {
        "compact": 2000, // Compact 4 Seater
        "suv": 3500,     // SUV-6 Seater
        "luxury": 6500,  // Luxury Van
        "minivan": 8500  // Minivan
    };
    
    // Calculate the total amount for the rental
    const totalAmount = vehiclePrices[vehicle] * days;

    // Update the amount field to display the total
    amountInput.value = totalAmount;
}

function handleCheckout() {
    const selectedVehicle = vehicleSelect.value;
    const days = parseInt(daysSelect.value);
    let amount = 0;

    // Calculate amount based on selected vehicle
    if (selectedVehicle === 'compact') {
        amount = 2000;
    } else if (selectedVehicle === 'suv') {
        amount = 3500;
    } else if (selectedVehicle === 'luxury') {
        amount = 6500;
    } else if (selectedVehicle === 'minivan') {
        amount = 8500;
    }

    // Multiply amount by the number of days
    const totalAmount = amount * days;

    // Make an API call to your server to create a payment intent (server-side)
    fetch('/create-payment-intent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: totalAmount * 100 }) // Amount in cents
    })
    .then(response => response.json())
    .then(data => {
        const clientSecret = data.clientSecret;

        // Use Stripe.js to handle the payment
        stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: document.createElement('input'), // Use your card input method here
                billing_details: {
                    name: 'Customer Name', // Replace with actual customer data
                },
            },
        }).then(result => {
            if (result.error) {
                alert('Payment failed: ' + result.error.message);
            } else {
                if (result.paymentIntent.status === 'succeeded') {
                    alert('Payment successful! Enjoy your vehicle!');
                }
            }
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Initially calculate the amount when the page loads
document.addEventListener("DOMContentLoaded", updateAmount);
