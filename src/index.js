import "./style.css";

const  form = document.querySelector('form');
const  input = document.querySelector('input');

form.addEventListener('submite',  event => {
console.log(event);
    event.preventDefault();
});
input.addEventListener("keydown", event => {
    if (event.key === 't') {
        input.style.borderColor = "red";
    }
    console.log(event);
} );