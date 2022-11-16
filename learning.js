function greeting(firstName) {
    let x = document.createElement('div');
    x.innerText = 'Hello ' + firstName;
    document.body.appendChild(x)
}

function toUpper(x) {
    let y = document.createElement('div');
    let xUpper = x.toUpperCase();
    y.innerText = xUpper;
    document.body.appendChild(y);
}
function saveEntry() {
    var input = document.getElementById('userInput')
    return input;
}
function showArr(array) {
    let y = document.createElement('div');
    y.innerText = array;
    document.body.appendChild(y);
        
    };
