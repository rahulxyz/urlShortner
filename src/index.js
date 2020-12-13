const baseUrl = "http://localhost:3000/api/url";

let urlInput = document.getElementById("url");
let shortUrl = document.getElementById("short-url");
let timestamp = document.getElementById("timestamp");
let bigUrl = document.getElementById("big-url");
let tooltip = document.getElementById("big-url-tooltip");

let submitBtn = document.getElementById("submit-url");

const endpoint = "https://restcountries.eu/rest/v2/all";

url.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        submitUrl();
    }
})

const submitUrl = () => {
    const payload = {
        url: urlInput.value
    }
    shortUrl.href="http://asda";
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    }).then((res) => {
        shortUrl.innerHTML = res.tinyUrl;
        shortUrl.href = res.tinyUrl;
        bigUrl.href =  res.bigUrl;
        tooltip.innerHTML = res.bigUrl;
    });

    urlInput.value = "";
    payload.url = "";
}



