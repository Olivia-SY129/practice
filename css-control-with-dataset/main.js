const input = document.querySelectorAll(".controllers input");

function eventHandler() {
    const suffix = this.dataset.sizing || '';
    console.log(this.value)
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

input.forEach(input => input.addEventListener("input", eventHandler));
