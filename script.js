let quotes = [
    'Even if you fall on your face, you\'re still moving forward.' ,
    'Failure is the condiment that gives success its flavor.' ,
    'I know, somehow, that only when it is dark enough can you see the stars.' ,
    'Today\'s accomplishments were yesterday\'s impossibilities.' ,
    'Light tomorrow with today.' ,
    'Opportunity does not knock, it presents itself when you beat down the door.',
    'Forever is composed of nows.' ,
    'Knowing is not enough; we must apply. Wishing is not enough; we must do.' ,
    'You can\'t wait for inspiration. You have to go after it with a club.' ,
    'With the possible exception of the equator, everything begins somewhere.' ,
]

function newQuote(){
    debugger
   let randomQuote =Math.floor(Math.random() * quotes.length); 
document.getElementById('quoteDisplay').innerHTML = quotes[randomQuote];
}

