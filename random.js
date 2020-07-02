
const rand={
  beginning:[
    ' Happiness is a choice',
    'life is what you make it',
    'life is an experiment',
    'Life is really simple'


],
middle:[
  
'  If you choose  not to submit to your failures',
'  you cannot choose what happens ',
'  make it beautiful',
'  make it simple and cheerful'
  
],
 end:[
    ' then you will have much success in your life.' ,    
    '  no matter where you come from  ',
    '  you will not be successsful',
    ' you chose to make it full of happiness and joy. '    
    
]
}
//real function (not commented out)
var randomNumber=  function(arr) {
            var result =[]
        
    
            result.push(arr[Math.floor(Math.random() * arr.length)]);
           
           return result
        }
function generateQuote() {
    deleteChild()
     const quotes=randomNumber(rand.beginning)  +randomNumber(rand.middle)  + randomNumber(rand.end)   ;
    var p= document.createElement("p");
    var text = document.createTextNode(quotes);
    p.appendChild(text);
    document.getElementById('quoteDisplay').appendChild(p);

}
