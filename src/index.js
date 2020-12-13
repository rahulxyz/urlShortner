let urlInput = document.getElementById("url");
let shortUrl = document.getElementsByClassName("short-url");
let timestamp = document.getElementsByClassName("timestamp");

let submitBtn = document.getElementById("submit-url");


const endpoint = "https://restcountries.eu/rest/v2/all";

url.addEventListener("keyup", (event)=>{
    if (event.keyCode === 13) {
        event.preventDefault();
        submitUrl();
    }
})

const submitUrl = ()=>{
    console.log(">>>>>>>>>> ", urlInput.value, shortUrl.item(0).innerHTML, timestamp.item(0).innerHTML);
    urlInput.value = "";
    fetch(endpoint).then((res)=>{
        console.log(">>>>> ", res);
    })
}