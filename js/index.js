// Booking Form

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bookingForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const ticketsInput = document.getElementById('tickets');
    const dateInput = document.getElementById('date');
    const roomCategorySelect = document.getElementById('roomCategory');
    const shuttleBusSelect = document.getElementById('shuttleBus');
    const schoolBusSelect = document.getElementById('schoolBus');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const bookingData = {
            name: nameInput.value,
            email: emailInput.value,
            tickets: ticketsInput.value,
            date: dateInput.value,
            roomCategory: roomCategorySelect.value,
            shuttleBus: shuttleBusSelect.value,
            schoolBus: schoolBusSelect.value
        };

        // Store data in local storage
        localStorage.setItem('bookingFormData', JSON.stringify(bookingData));

        // Optional: Clear the form after submission
        form.reset();

        alert('Booking details saved successfully!');
    });

    // Optional: Load previously saved data when the page loads
    // const savedData = localStorage.getItem('bookingFormData');
    // if (savedData) {
    //     const parsedData = JSON.parse(savedData);
    //     nameInput.value = parsedData.name || '';
    //     emailInput.value = parsedData.email || '';
    //     ticketsInput.value = parsedData.tickets || '1';
    //     dateInput.value = parsedData.date || '';
    //     roomCategorySelect.value = parsedData.roomCategory || '';
    //     shuttleBusSelect.value = parsedData.shuttleBus || '';
    //     schoolBusSelect.value = parsedData.schoolBus || '';
    // }
});
// Price Calculation and Form Submission
document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.getElementById('bookingForm');
    const totalPriceElement = document.getElementById('totalPrice');

    // Form elements that affect the price
    const roomCategory = document.getElementById('roomCategory');
    const shuttleBus = document.getElementById('shuttleBus');
    const schoolBus = document.getElementById('schoolBus');

    // Calculate and update total price
    function updateTotalPrice() {
        let totalPrice = 0;

        // Add room price if selected
        if (roomCategory.value) {
            const selectedOption = roomCategory.options[roomCategory.selectedIndex];
            totalPrice += parseInt(selectedOption.getAttribute('data-price') || 0);
        }

        // Add shuttle bus price if selected
        if (shuttleBus.value) {
            const selectedOption = shuttleBus.options[shuttleBus.selectedIndex];
            totalPrice += parseInt(selectedOption.getAttribute('data-price') || 0);
        }

        // Add school bus price if selected
        if (schoolBus.value) {
            const selectedOption = schoolBus.options[schoolBus.selectedIndex];
            totalPrice += parseInt(selectedOption.getAttribute('data-price') || 0);
        }

        // Format and display the total price
        totalPriceElement.textContent = `PKR ${totalPrice.toLocaleString()}`;
    }

    // Add event listeners to update price when selections change
    roomCategory.addEventListener('change', updateTotalPrice);
    shuttleBus.addEventListener('change', updateTotalPrice);
    schoolBus.addEventListener('change', updateTotalPrice);

    // Handle form submission
    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const tickets = document.getElementById('tickets').value;
        const date = document.getElementById('date').value;
        // const selectedRoom = roomCategory.value || ;
        // const selectedShuttle = shuttleBus.value || ;
        // const selectedSchoolBus = schoolBus.value || ;
        const roomCategory = document.getElementById('roomCategory');
        const shuttleBus = document.getElementById('shuttleBus');
        const schoolBus = document.getElementById('schoolBus');
        const totalPrice = totalPriceElement.textContent;

        // Display booking summary
        alert(`Booking Confirmed!\n\nName: ${'name'}\nEmail: ${'email'}\nTickets: ${'tickets'}\nDate: ${'date'}\nRoom: ${'selectedRoom'}\nShuttle: ${'selectedShuttle'}\nSchool Bus: ${'selectedSchoolBus'}\nTotal Price: ${totalPrice}`);

        // Reset form
        bookingForm.reset();
        updateTotalPrice();
    });

    // Initialize total price
    updateTotalPrice();
});

// contact us

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !subject || !message) {
            alert('All fields are required');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Invalid email address');
            return;
        }

        const contactSubmission = {
            id: Date.now(),
            name: name,
            email: email,
            subject: subject,
            message: message,
            timestamp: new Date().toISOString()
        };

        let submissions = JSON.parse(localStorage.getItem('contactSubmissions')) || [];
        submissions.push(contactSubmission);
        localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

        alert('Contact Successful');
        contactForm.reset();
    });
});

document.getElementById('emailForm').addEventListener('submit', function (event) {
    event.preventDefault(); // stop form from submitting


    const emailInput = this.querySelector('input[type="email"]');
    const notification = document.getElementById('notification');

    // Email validation
    if (emailInput.value === '') {
        alert('Kindly enter your email');
        return;
    }

    if (!isValidEmail(emailInput.value)) {
        alert('Please enter a valid email address');
        return;
    }

    // Notify user of successful subscription
    notification.style.display = 'block';

    // Clear the input field
    emailInput.value = '';

    // Hide notification after 5 seconds
    setTimeout(function () {
        notification.style.display = 'none';
    }, 5000);

    // Log the subscribed email (for demonstration purposes)
    console.log('Email Subscribed', emailInput.value);
});

// Simple email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}