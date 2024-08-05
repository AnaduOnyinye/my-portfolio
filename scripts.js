document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (name === '' || email === '' || message === '') {
        document.getElementById('formStatus').textContent = 'Please fill out all fields.';
        return;
    }
    // Simulate form submission
    document.getElementById('formstatus').textContent= 'Thank you for your message!';
    // Reset form fields
    document.getElementById('contactForm').reset();
   });
