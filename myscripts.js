const myAddBtn = document.querySelector(".buttons #add-btn");
const myRemBtn = document.querySelector(".buttons #remove-btn");
const input = document.querySelector(".element-text");
const queueDiv = document.querySelector(".queue");
let queue = [];

function getInputValue() {
    return input.value;
}

function makeQueueDOMNode(val){
    let newDiv = document.createElement('div');
    newDiv.innerHTML = val;
    queueDiv.appendChild(newDiv);
}

function renderQueue() {
    emptyVisual();
    queue.map(makeQueueDOMNode);
}

function handleAdd() {
    // get usr input
    var ourInput = getInputValue();
    queue.push(ourInput);
    renderQueue();
    input.value = "";
}

function handleRemove() {
    queue.shift();
    renderQueue();
}

function emptyVisual() {
    queueDiv.innerHTML = "";

}

myAddBtn.onclick = handleAdd;
myRemBtn.onclick = handleRemove;
// input.onsubmit = function queueSubmit(ev){
//     ev.preventDefault();
//     console.log(ev);
// }