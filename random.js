
const rand={
  beginning:[
    ' Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe',
    ' To be sure of hitting the target, shoot first, and call whatever you hit the target',
    ' Nothing happens until something moves',
    ' If I won the award for laziness, I would send somebody to pick it up for me '
],
middle:[
    ' Two possibilities exist: either we are alone in the Universe or we are not. Both are equally terrifying',
    ' Limitless undying love which shines around me like a million suns it calls me on and on across the universe',
    ' Never take life seriously. Nobody gets out alive anyway ',
    ' Lazy people fact #234782. You were too lazy to read that number'
],
 end:[
     ' The universe is a pretty big place. If it\'s just us, seems like an awful waste of space.',
    '  The Universe is under no obligation to make sense to you.',
    ' Yesterday I did nothing and today I\'m finishing what I did yesterday. '
]
}
//real function (not commented out)
function generateQuote() {
    deleteChild()
     const quotes=randomNumber(rand.beginning)  +randomNumber(rand.middle)  + randomNumber(rand.end)   ;
    var p= document.createElement("p");
    var text = document.createTextNode(quotes);
    p.appendChild(text);
    document.getElementById('quoteDisplay').appendChild(p);

}
