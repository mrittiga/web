// Smooth Scrolling  
document.querySelectorAll('a[href^="#"]').forEach(anchor => {  
    anchor.addEventListener('click', function (e) {  
        e.preventDefault();  
        document.querySelector(this.getAttribute('href')).scrollIntoView({  
            behavior: 'smooth'  
        });  
    });  
});  

// Book Now Button Click Handler  
document.querySelector('.cta').addEventListener('click', () => {  
    window.location.href = 'booking.html';  
});  

// Destination Cards Interaction  
const destinationCards = document.querySelectorAll('.destination-card');  

destinationCards.forEach(card => {  
    card.addEventListener('mouseover', () => {  
        card.classList.add('hover');  
    });  

    card.addEventListener('mouseout', () => {  
        card.classList.remove('hover');  
    });  
});  

// Testimonial Cards Carousel  
const testimonialCards = document.querySelectorAll('.testimonial-card');  
let currentIndex = 0;  

function showTestimonialCard(index) {  
    testimonialCards.forEach((card, i) => {  
        if (i === index) {  
            card.style.display = 'block';  
        } else {  
            card.style.display = 'none';  
        }  
    });  
}  

function nextTestimonialCard() {  
    currentIndex = (currentIndex + 1) % testimonialCards.length;  
    showTestimonialCard(currentIndex);  
}  

setInterval(nextTestimonialCard, 5000);