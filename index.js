let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0
function increment(){

    count = count + 1
    countEl.innerText = count
}

function save(){
    let numbersave = count + " - "
    saveEl.textContent += numbersave
    // we did not use inner text here because it is cutting out the spaces 
    // the alternative for innertext is text content, search from google mdn 
    // to search type alternative of innertext mdn 
    countEl.textContent = 0 // to set the count on the screen to zero
    count = 0 // to set the actual count to 0 
    console.log(count)
}
