console.log('js');

let favFoods = ['pizza', 'chicken', 'apples', 'mac and cheese'];
let employees = [];
let count = 0;

// event #2
$(document).ready(onReady);


function onReady(number) {
    console.log('jq', number);   

    // get element from html
    // the third event
    // event listener
    $('#bestButton').on('click', buttonClicked);

    // on page load this next favFoods element exists
    // this adds the word Hello in a list item to the DOM
    // $('#favFoods').append('<li>Hello</li>');

    // want to append favFoods array
    // Here we do it one at a time
    //$('#favFoods').append('<li>' + favFoods[0] + '</li>');
    //$('#favFoods').append('<li>' + favFoods[1] + '</li>');
    //$('#favFoods').append('<li>' + favFoods[2] + '</li>');

    // make loop so it gets all the stuff in the array without typing each line 
    // for (let i = 0; i < favFoods.length; i++) {
    //     $('#favFoods').append('<li>' + favFoods[i] + '</li>');
    // }

    // Then we can do this.  This uses string interpolation
      //   for (let i = 0; i < favFoods.length; i++) {
         //    $('#favFoods').append(`<li> One of my favorite foods is ${favFoods[i]}! <button class="deleteButton">Delete</button> </li>`);
       //  }

     //    $('.deleteButton').on('click', deleteFunction);

     // we say hey ul, future children with class deleteButton, attach code of deleteFunction to
    $('#favFoods').on('click', ".deleteButton", deleteFunction);
    // this sets the changeColor functionality to the Change Color button class
    $('#favFoods').on('click', ".changeColor", changeColor );

    // form stuff
    $('#submitForm').on('click', submitForm);

    $('#counter').on('click', countUp);
    $('#count').text(count);

}   // end onReady fn

function buttonClicked() {

    // now when it's down here, all of the array items are added when the button is clicked.
    console.log('I was clicked');
    // to clear out element
    $('#favFoods').empty();
    for (let i = 0; i < favFoods.length; i++) {
        $('#favFoods').append(`
            <li> One of my favorite foods is ${favFoods[i]}! 
                <button class="deleteButton">Delete</button>
                <button class="changeColor">Change Color</button> 
            </li>
        `);
    }   // end for

}   // end buttonClicked fn

function deleteFunction() {
    console.log('delete');
    
    // uses this functionality, but only removes the button
    // $(this).remove();
    // this line uses this functionality to remove the parent element, the list item, from the DOM
    $(this).parent().remove();
}

// fires when change Color button clicked
function changeColor() {
    console.log('color');
    // going up to parent of button, which is the list item
    // we added class to css file which is added to the item here
    //$(this).parent().addClass('blueColor');

    $(this).parent().toggleClass('blueColor');
}

function submitForm() {
    console.log('form submitted');
    // want to grab values after submit clicked, not before
    // getter called val
    let name = $('#name').val();
    console.log('name:', name);
    //employees.push(name); we were just adding to employees array, but now it is an
    // object so the whole object is pushed
    let title = $('#title').val();
    console.log('title', title);
    //employees.push(title);
    let object = {
        employeeName: name,
        employeeTitle: title
    }
    employees.push(object);
    // setter also called .val('something') will put the stuff inside parentheses on dom
    $('#name').val('');
    $('#title').val('');

}

// want functionality to increment counter when the buton with id counter is clicked
function countUp() {
    console.log('countUp function');
    // updating global variable.  No return needed
    count++;
    console.log(count);
    $('#count').text(count);
    
}

// event #1 before it even gets to the document ready on line 3
onReady(1);