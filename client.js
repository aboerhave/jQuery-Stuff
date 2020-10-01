console.log('js');

// event #2
$(document).ready(onReady);

function onReady(number) {
    console.log('jq', number);   
}

// event #1 before it even gets to the document ready on line 3
onReady(1);