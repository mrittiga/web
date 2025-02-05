// script.js
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from actually submitting
    // Handle search logic here (e.g., redirect to search results page)
    alert("Search submitted (placeholder)"); // Placeholder alert
});


// Sample Property Data (You'd likely fetch this from a database or API)
const properties = [
    { image: "property1.jpg", title: "Modern Apartment", description: "3 Bedrooms, 2 Bathrooms" },
    { image: "property2.jpg", title: "Family House", description: "4 Bedrooms, 3 Bathrooms" },
    // ... more properties
];

function displayProperties(properties) {
    const propertyList = document.querySelector('.property-list');
    propertyList.innerHTML = ""; // Clear existing properties
    properties.forEach(property => {
        const propertyDiv = document.createElement('div');
        propertyDiv.classList.add('property');
        propertyDiv.innerHTML = `
            <img src="<span class="math-inline">\{property\.image\}" alt\="</span>{property.title}">
            <h3><span class="math-inline">\{property\.title\}</h3\>
<p\></span>{property.description}</p>
            <a href="#" class="view-details">View Details</a>
        `;
        propertyList.