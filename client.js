console.log('js');

// event #2
$(document).ready(onReady);

function onReady(number) {
    console.log('jq', number);   

    // get element from html
    // the third event
    // event listener
    $('#bestButton').on('click', buttonClicked);
}

function buttonClicked() {
    console.log('I was clicked');
    
}

// event #1 before it even gets to the document ready on line 3
onReady(1);