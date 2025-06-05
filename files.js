
    let image = document.querySelector("#image")
    let name = document.querySelector("name")
    let description = document.querySelector("description")
    let btn = document.querySelector("#btn")
 
    btn.addEventListener("click",()=>{
        location.reload();
    })

const apiUrl = 'https://api.waifu.im/search';

const headers = new Headers();
headers.append('Accept-Version', 'v6');

fetch(apiUrl, { headers })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Request failed with status code: ' + response.status);
    }
  })
  .then(data => {
    console.log(data)
   let imgWife  = data.images[0].url
    data.images[0].width = null
      
   console.log(imgWife)
     
   image.src = imgWife

  })
   .catch(error => {
    console.error('An error occurred:', error.message);
  }); 
 
