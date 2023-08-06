const btn = document.getElementById("btn");
const advice = document.getElementById("advice");
const id = document.getElementById("advice-id");
const text = document.getElementById("advice-text");
const url = "https://api.adviceslip.com/advice";

// let getAdvice = () => {
//     fetch(url)
//         .then(data => data.json())
//         .then(item => {
//             advice.textContent = `${item.slip.advice}`;
//             id.textContent = `${item.slip.id}`;
//         })
// }
 async function getAdvice() {
    text.classList.remove('fade')
    const response = await fetch(url)
    const data = await response.json();
    advice.textContent = `${data.slip.advice}`;
    id.textContent = `${data.slip.id}`;
    text.classList.add('fade');
}

btn.addEventListener('click', getAdvice);
document.addEventListener('DOMContentLoaded', getAdvice);

