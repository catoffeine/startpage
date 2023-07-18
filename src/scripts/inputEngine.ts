
document.querySelector('.search_input_text').addEventListener('input', onInput)

function onInput() {
    console.log(this)
    let spanElm = this.nextElementSibling;
    spanElm.textContent = this.value;
    this.style.width = spanElm.offsetWidth + 'px';
};