document.getElementById("colorPicker").addEventListener("input", function () {
    let color = this.value;
    document.getElementById("hexValue").innerText = color;
    document.getElementById("rgbValue").innerText = hexToRgb(color);
});

function hexToRgb(hex) {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
}

function copyToClipboard(elementId) {
    let text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
}
