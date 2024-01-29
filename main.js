const button = document.getElementById('button')
const screenSize = window.matchMedia("(max-width: 560px)")
let pattern;

async function showAdvice() {
    const reponse = await fetch("https://api.adviceslip.com/advice");
    const advice = await reponse.json();

    const adviceId = advice.slip.id;
    const adviceText = advice.slip.advice;

    if (screenSize.matches) {
            pattern = "mobile";
        } else {
            pattern = "desktop";
        }

    const adviceCard = document.querySelector(`#advice-content`);

    const HTMLString = `
        <h1>A D V I C E #${adviceId}</h1>

        <div class="p-advice">
            <p>"${adviceText}"</p>
        </div>

        <img class="pattern-divider" src="./images/pattern-divider-${pattern}.svg">
    `;

    adviceCard.innerHTML = HTMLString;

    console.log(advice);
    console.log(adviceId);
    console.log(adviceText);
    console.log(pattern);
}

button.addEventListener('click', showAdvice);

showAdvice();