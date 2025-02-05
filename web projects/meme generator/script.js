const memeImage = document.getElementById("meme-img");
const memeTitle = document.getElementById("meme-title");

async function getMeme() {
    try {
        let response = await fetch("https://api.imgflip.com/get_memes");
        let data = await response.json();
        
        let memes = data.data.memes;
        let randomMeme = memes[Math.floor(Math.random() * memes.length)];
        
        memeImage.src = randomMeme.url;
        memeTitle.innerText = randomMeme.name;
    } catch (error) {
        console.log("Error fetching meme:", error);
    }
}

function addCaption() {
    let topText = document.getElementById("top-text").value;
    let bottomText = document.getElementById("bottom-text").value;

    if (topText || bottomText) {
        let memeUrl = memeImage.src + `?top=${topText}&bottom=${bottomText}`;
        memeImage.src = memeUrl;
    }
}
