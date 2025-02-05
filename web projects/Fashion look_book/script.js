document.querySelectorAll('.button').forEach(button => {  
    button.addEventListener('click', function(event) {  
        event.preventDefault(); // Prevent the default action of the link  
        alert("The 'Shop Now' link is currently not set up. Stay tuned!");  
    });  
});