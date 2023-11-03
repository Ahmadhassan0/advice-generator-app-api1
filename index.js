const adviceId = document.querySelector('.advice__label__id');
const adviceText = document.querySelector('.advice__text');
const adviceDiceIcon = document.querySelector('.advice__dice__icon');
const api = "https://api.adviceslip.com/advice";

async function getAdvice() {
    const res = await fetch(api);
    const {slip:{id,advice}} = await res.json();
    adviceId.innerText = id;
    adviceText.innerText = advice;
}

getAdvice()

adviceDiceIcon.addEventListener("click",getAdvice)