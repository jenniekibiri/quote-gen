
const  beginning=[
    ' Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe',
    ' To be sure of hitting the target, shoot first, and call whatever you hit the target',
    ' Nothing happens until something moves',
    ' If I won the award for laziness, I would send somebody to pick it up for me '
]
const middle =[
    ' Two possibilities exist: either we are alone in the Universe or we are not. Both are equally terrifying',
    ' Limitless undying love which shines around me like a million suns it calls me on and on across the universe',
    ' Never take life seriously. Nobody gets out alive anyway ',
    ' Lazy people fact #234782. You were too lazy to read that number'
]
const end=[
     ' The universe is a pretty big place. If it\'s just us, seems like an awful waste of space.',
    '  The Universe is under no obligation to make sense to you.',
    ' Yesterday I did nothing and today I\'m finishing what I did yesterday. '
]
 
//real function (not commented out)
function generateQuote() {
          
    //random generation each function call:
    var randomStart = Math.floor(Math.random()*beginning.length);
    var randomMiddle = Math.floor(Math.random()*middle.length);
    var randomEnd = Math.floor(Math.random()*end.length);
    //put the random text in the p tag with id of 'target':
    document.getElementById('quoteDisplay').innerHTML =  beginning[randomStart]  +  middle[randomMiddle] + end[randomEnd] ;
    
    
}
generateQuote()