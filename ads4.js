var dataUrl = [
  
  'https://r7movies.com/en/movie'

 
];
var randomItem = dataUrl[Math.floor(Math.random()*dataUrl.length)];
window.location = randomItem;
