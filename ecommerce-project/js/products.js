filterSelection('all'); // adds the 'show' class to all divs
function filterSelection(str){
    var elementArray;
    elementArray = document.getElementsByClassName('product-grid__product'); // stores all elements with class name 'product-grid__product' into an array
    if (str == 'all') {
        str = '';
    }

    for (var i = 0; i < elementArray.length; i++) {
        removeClass(elementArray[i], 'show'); // removes 'show' from every element
        if (elementArray[i].className.indexOf(str) > -1) {
            addClass(elementArray[i], 'show'); // adds 'show' to every element that matches the str class
        }
    }

}

// Show elements
function addClass(element, name) {
    var array1; 
    array1 = element.className.split(" "); // .className returns the entire class string
    if (array1.indexOf(name) == -1) { // checks if the element does not already have 'show' class
        element.className += " " + name;
    }

}

// Hide elements
function removeClass(element, name) {
    var array1;
    array1 = element.className.split(" ");
    while (array1.indexOf(name) > -1) { // continously loops until all instances of name do not exist
        array1.splice(array1.indexOf(name), 1); // at the index of name, deletes one element
    }
    element.className = array1.join(" ");
}


  
// Add active class 
var btns = document.getElementsByClassName('filters__btn');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("filters__btn--active"); // grabs an array with all currently 
        current[0].className = current[0].className.replace(" filters__btn--active", ""); // in the first element, removes the active class
        this.className += " filters__btn--active"; // adds the active class to the button clicked
    });
}