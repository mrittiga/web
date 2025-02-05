// Script to toggle visibility of skills and experience sections  
document.getElementById("toggle-skills").addEventListener("click", function() {  
    const skillsList = document.getElementById("skills-list");  
    if (skillsList.style.display === "none" || skillsList.style.display === "") {  
        skillsList.style.display = "block";  
    } else {  
        skillsList.style.display = "none";  
    }  
});  

document.getElementById("toggle-experience").addEventListener("click", function() {  
    const experienceList = document.getElementById("experience-list");  
    if (experienceList.style.display === "none" || experienceList.style.display === "") {  
        experienceList.style.display = "block";  
    } else {  
        experienceList.style.display = "none";  
    }  
});  

// Alert on clicking contact information  
document.querySelector("footer").addEventListener("click", function() {  
    alert("Feel free to reach out via email or LinkedIn!");  
});