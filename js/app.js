const buttons = document.querySelectorAll('.btn');
const colors =['#8CE4FF', '#FEEE91', '#FFA239', '#FF5656', '#FF8F8F', '#FFF1CB', '#C2E2FA', '#B7A3E3'];

function changeBgColor(event) {
    let randColor = Math.floor(Math.random() * colors.length);
    const card = event.target.closest('.card');
    card.style.backgroundColor = colors[randColor];
}

buttons.forEach(button => {
    button.addEventListener('click', changeBgColor)
});