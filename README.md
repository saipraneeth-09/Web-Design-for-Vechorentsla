# Web-Design-for-Vechorentals
# VECHORENTALS - Self-Drive Vehicle Rental Website

## Overview

VECHORENTALS is a simple and user-friendly website for renting self-drive vehicles. It allows users to browse available vehicles, select rental durations, view prices, and theoretically proceed with a booking. The site features sections for an introduction, available vehicles with booking options, payment details, and contact information.

**Key Features:**

* **Browse Available Vehicles:** Displays different vehicle types (Compact 4-Seater, SUV 6-Seater, Luxury Van, Mini Bus) with images and descriptions.
* **Select Rental Duration:** Users can choose the number of days they want to rent a vehicle through a dropdown menu.
* **Dynamic Price Updates:** The price of the rental is dynamically updated based on the selected rental duration.
* **Booking Functionality (Simulated):** A "Book Now" button for each vehicle triggers a JavaScript alert indicating the selected vehicle.
* **Payment Details Section:** Includes a form to select a vehicle and rental duration, displaying the calculated amount and various payment method options. A "Proceed to Payment" button is present.
* **Contact Us Section:** Provides a contact form for users to send inquiries and displays contact details like name, location, address, cell number, and email.
* **Basic Styling:** The website is styled using a linked CSS file (`travel.css`).

## Technologies Used

* HTML5: For structuring the content of the web page.
* CSS3: For styling the layout and appearance of the website.
* JavaScript: For implementing interactive features like dynamic price updates and basic booking simulations.

## How to Use

1.  **Clone the Repository (if applicable):** If you have access to the repository, clone it to your local machine using Git:
    
2.  **Open `index.html`:** Navigate to the directory containing the website files and open the `index.html` file in your web browser.

3.  **Browse Vehicles:** In the "Available Vehicles" section, you can see the different vehicle options with their descriptions and images.

4.  **Select Rental Duration and View Price:** For each vehicle, use the dropdown menu to select the number of days you want to rent. The price displayed below will update based on your selection (note: the price update logic in the provided code applies a fixed multiplier, it's not truly dynamic based on vehicle type in that section).

5.  **Book a Vehicle:** Click the "Book Now" button for your desired vehicle. A JavaScript alert will pop up indicating the vehicle you selected.

6.  **View Payment Details:** Navigate to the "Payment Details" section. Here you can:
    * Select a vehicle from the dropdown.
    * Choose the number of rental days.
    * The "Amount" field will update based on your selections.
    * You can also see the available payment method options. The "Proceed to Payment" button is present but doesn't have actual payment gateway integration.

7.  **Contact Us:** In the "Contact Us" section, you can fill out the form with your name, email, and message, and click "Send Message." The form submission is currently set to `#` and doesn't perform any actual data submission. You can also find the provided contact details in this section.

## File Structure
