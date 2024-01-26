const button2 = document.getElementById("button")
const adviceCard = document.querySelector(".advice-card");
let advice;

async function showAdvice() {
    const reponse = await fetch("https://api.adviceslip.com/advice");
    advice = await reponse.json();

    const adviceId = advice.slip.id;
    const adviceText = advice.slip.advice;

    const HTMLString = `
        <h1>A D V I C E #${adviceId}</h1>

        <div class="p-advice">
        <p>"${adviceText}"</p>
        </div>

        <img class="pattern-divider" src="./images/pattern-divider-desktop.svg">

        <button id="button"><img src="./images/icon-dice.svg"></button>
    `;

    adviceCard.innerHTML = HTMLString;

    console.log(advice);
    console.log(adviceId);
    console.log(adviceText);
}

showAdvice()

button2.addEventListener("click", () => {
    showAdvice()
});

