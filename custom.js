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

function generateCustomQuote() {
    valueSelected = document.querySelector('#inputGroupSelect01'); 
                      
    output = valueSelected.options[valueSelected.selectedIndex].value; 
console.log(output)
    if(output==="1"  ){
        
     //random generation each function call:
    var funnyStart = Math.floor(Math.random()*funny.beginning.length);
    var funnyMiddle = Math.floor(Math.random()*funny.middle.length);
    var funnyEnd = Math.floor(Math.random()*funny.end.length);
    //put the random text in the p tag with id of 'target':
   const quotes=funny.beginning[funnyStart]  + funny.middle[funnyMiddle]  + funny.end[funnyEnd] ;
console.log(quotes)
   quantity = document.querySelector('#quantity').value; 
   for (i = 1; i < quantity; i++) {
       var p= document.createElement("p");
       var text = document.createTextNode(quotes);
       p.appendChild(text);
       document.getElementById('quoteDisplay').appendChild(p);
     }
    }else if (output==="2"){
    
    //random generation each function call:
    var randomStart = Math.floor(Math.random()*life.beginning.length);
    var randomMiddle = Math.floor(Math.random()*life.middle.length);
    var randomEnd = Math.floor(Math.random()*life.end.length);
    //put the random text in the p tag with id of 'target':
        const quotes = life.beginning[randomStart]  + life.middle[randomMiddle] + life.end[randomEnd];
        quantity = document.querySelector('#quantity').value; 
        for (i = 1; i < quantity; i++) {
            var p= document.createElement("p");
            var text = document.createTextNode(quotes);
            p.appendChild(text);
            document.getElementById('quoteDisplay').appendChild(p);
          }
       }
    }