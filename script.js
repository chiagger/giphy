const refreshBtn = document.querySelector("#refresh");
const img = document.querySelector('img');

const promise1 = new Promise((resolve, reject) => {
    try {
    function newImg() {
        fetch('https://api.giphy.com/v1/gifs/translate?api_key=14wu7N28JDFbmZtWnZbuSG5CFVVpSP75&s=cats', { mode: 'cors' })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            img.src =response.data.images.original.url;
        });
    }
    
    refreshBtn.addEventListener("click", newImg);
    
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=14wu7N28JDFbmZtWnZbuSG5CFVVpSP75&s=cats', { mode: 'cors' })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            img.src =response.data.images.original.url;
        });
    } catch (error) { //i hope it workz?
        alert("couldn't find gif this time :(");

    }
  });
  




