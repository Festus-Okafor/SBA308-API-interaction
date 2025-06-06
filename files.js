
 import {twerkit} from './powerpuff.js'
 export  {apiUrl}
    let image = document.querySelector("#image")
    let wifeName = document.querySelector("#name")
    let wifeDescription = document.querySelector("#description")
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
      setTimeout(function(){
      throw new Error('Request failed with status code: ' + response.status);
      }, 2000);
    }
  
  })
  .then(data => {
    //console.log(data)
   let imgWife  = data.images[0].url
   let name = data.images[0].tags[0].name
   let description = data.images[0].tags[0].description
   //console.log(description)
    //data.images[0].width = 100
    //data.images[0].height = 120

   image.src = imgWife
   console.log(imgWife)
   wifeName.textContent = name
   console.log(wifeName)
   wifeDescription.textContent = description
   console.log(wifeDescription)

  })
 
   .catch(error => {
    console.error('An error occurred:', error.message);
  
  }); 
 
  setTimeout (function(){


  },2000);
  twerkit()
