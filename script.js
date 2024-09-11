document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Basic form validation (You can extend this with more complex checks)
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '!');
        // Here you would normally send the data to a server
    } else {
        alert('Please fill out all fields.');
    }
});
