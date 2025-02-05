const apiKey = "b189635437e3452391318a0081ef5d63";
const newsContainer = document.getElementById("news-container");

async function fetchNews(category = "general") {
    newsContainer.innerHTML = "<h3>Loading...</h3>";
    
    try {
        let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`);
        let data = await response.json();
        
        if (data.articles.length === 0) {
            newsContainer.innerHTML = "<h3>No news available.</h3>";
            return;
        }

        newsContainer.innerHTML = data.articles.map(article => `
            <div class="news-card">
                <img src="${article.urlToImage}" alt="News Image">
                <div>
                    <a href="${article.url}" target="_blank">${article.title}</a>
                    <p>${article.source.name}</p>
                </div>
            </div>
        `).join('');
    } catch (error) {
        newsContainer.innerHTML = "<h3>Error fetching news.</h3>";
        console.log("Error fetching news:", error);
    }
}

// Load default news on page load
fetchNews();
