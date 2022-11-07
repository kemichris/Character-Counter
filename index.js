const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

// keyup is an event listener that tells us when a key is being pressed
textareaEl.addEventListener("keyup", ()=>{
    updateCounter()

})

updateCounter()

function updateCounter() {
    totalCounterEl.innerText = textareaEl.value.length;

    let remainder = 150 - textareaEl.value.length;

    // remainingCounterEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length;

    remainingCounterEl.innerText = remainder;

}