const refreshBtn = document.querySelector("#refresh");
const img = document.querySelector('img');

getCats();
  
refreshBtn.addEventListener("click", getCats);


  async function getCats() {
    try {
        const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=14wu7N28JDFbmZtWnZbuSG5CFVVpSP75&s=cats', {mode: 'cors'});
        const catData = await response.json();
        img.src = catData.data.images.original.url;
    } catch (error) { //i hope it workz?
        alert("couldn't find gif this time :(");

    }

  }
