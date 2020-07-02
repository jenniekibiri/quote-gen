const funny = {

    beginning:[
        'working hard',
        'creating goals',
        'working in teams',
        'Asking for help'
        
     ],

    middle :[
        ' is something we do',
        ' is what we do',
        ' is what  best',
        ' is a best practise'

        
     ],
      end:[
    
' when we want to be successful ',
' when we want to achieve something',
' when you wanna build great product faster',
'when you want to move faster '

     ]


    }
    const life ={
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
    
var getMeRandomElements = function(arr) {
    var result = [];
    const quantity = Number(document.querySelector('#quantity').value);
    
    for (var i=1; i <= quantity; i++) {
        result.push(arr[Math.floor(Math.random()*arr.length)]);
    }
    return result;

}

    function deleteChild() { 
        var e = document.getElementById("quoteDisplay"); 
        var first = e.firstElementChild; 
        while (first) { 
            first.remove(); 
            first = e.firstElementChild; 
        } 
    } 
function generateCustomQuote(){
    var valueSelected = document.querySelector('#inputGroupSelect01'); 
     var output = valueSelected.options[valueSelected.selectedIndex].value; 
    if (output=="1"){
     
const quotes1 = getMeRandomElements (funny.beginning)
 const quotes2 = getMeRandomElements (funny.middle)
 const quotes3 = getMeRandomElements (funny.end)
 deleteChild()
quotes1.forEach(quote=>{

quotes2.forEach(quote2=>{
    middle = quote2
    })
quotes3.forEach(quote3=>{
     end =  quote3
    })
const sentence= quote + middle+ end
console.log(sentence)

    var p= document.createElement("p");
    var text = document.createTextNode(sentence);
    p.appendChild(text);
    document.getElementById('quoteDisplay').appendChild(p);
})
    }else if(output=="2"){
        const quotes1 = getMeRandomElements (life.beginning)
        const quotes2 = getMeRandomElements (life.middle)
        const quotes3 = getMeRandomElements (life.end)
        deleteChild()
       quotes1.forEach(quote=>{
       
       quotes2.forEach(quote2=>{
           middle = quote2
           })
       quotes3.forEach(quote3=>{
            end =  quote3
           })
       const sentence= quote + middle+ end
       console.log(sentence)
       
           var p= document.createElement("p");
           var text = document.createTextNode(sentence);
           p.appendChild(text);
           document.getElementById('quoteDisplay').appendChild(p);
       })
    }else{
        generateQuote()
    }
}




















