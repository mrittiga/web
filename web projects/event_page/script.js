document.getElementById("contact-form").addEventListener("submit", function(e) {  
    e.preventDefault(); // Prevent the default form submission behavior  

    // Get the values from the form fields  
    const name = document.getElementById("name").value;  
    const email = document.getElementById("email").value;  
    const message = document.getElementById("message").value;  

    // Here you would typically send the data to a server using AJAX  
    // For now, we will just show an alert and reset the form  
    alert(`Thank you, ${name}! Your message has been sent:\n${message}`);  

    // Reset the form  
    document.getElementById("contact-form").reset();  
});