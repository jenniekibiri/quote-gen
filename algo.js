const funny = {

    beginning:[
        ' Yesterday I did nothing and today I\'m finishing what I did yesterday',
         ' Studying means 10% reading and 90% complaining to your friends that you have to study',
         ' Always laugh when you can. It is cheap medicine ',
         ' I\'ve decided I\'m not old. I\'m 25 plus shipping and handling'
     ],

    middle :[
         ' I\'m not lazy, I\'m on power saving mode',
         '  Friends are chocolate chips in the cookie of life',
         ' Once you let mo-fos slide, they start to think they can ice skate',
         ' I almost gave a f—k. Scared the sh— out of myself'
     ],
      end:[
     ' I\'m not lazy, I\'m waiting for inspiration to hit me... should be here any time now ',
      'Our phones fall, we panic. Our friends fall, we laugh. - coolfunnyquotes.com ',
      ' our life can\'t fall apart if you never had it together',
      ' Always be yourself, unless you can be Beyonce then always be Beyonce'
     ]


    }
    const life ={
        beginning:[
            ' Me and my wife lived happily for twenty years then we met',
             'Live for each second without hesitation',
             ' You only live once, but if you do it right, once is enough',
             ' The purpose of our lives is to be happy.”'
    
         ],
        middle :[
             ' If your wife wants to learn to drive, don\'t stand in her way',
             ' If you want to live a happy life, tie it to a goal, not to people or things',
             ' In order to write about life first you must live it',
             ' Turn your wounds into wisdom.'
         ],
          end:[
         ' Marriage is like a walk in the park... Jurrasic Park - coolfunnyquotes.com ',
         ' In order to write about life first you must live it',
         'Don’t settle for what life gives you; make life better and build something',
         'You never really learn much from hearing yourself speak'
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




















