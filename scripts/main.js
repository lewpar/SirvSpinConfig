const elementSpeed = document.querySelector("#sirv-spin-speed");
const elementRange = document.querySelector("#sirv-spin-range");
const elementSpin = document.querySelector("#sirv-spin");
const elementSpinDirection = document.querySelector("#sirv-spin-direction");
const elementLink = document.querySelector("#link");
const elementNewLinkFrame = document.querySelector("#new-link-frame");
const elementHintText = document.querySelector("#sirv-hint-text");

elementHintText.addEventListener("input", (event) => {
    updateLink();
});

elementLink.addEventListener("input", (event) => {
    updateLink();
});

let spinSpeed = elementRange.value;

elementSpeed.textContent = elementRange.value;
elementRange.addEventListener("input", (event) => {
  elementSpeed.textContent = event.target.value;
  spinSpeed = event.target.value;
  updateLink();
});

elementSpin.addEventListener("input", (event) => {
    updateLink();
});

elementSpinDirection.addEventListener("input", (event) => {
    updateLink();
});

function updateLink()
{
    let elementLink = document.querySelector("#link");
    let elementNewLink = document.querySelector('#new-link');

    let newLink = `${elementLink.value}?autospinSpeed=${spinSpeed}`;

    let spinType = elementSpin.value;
    newLink = `${newLink}&autospin=${spinType}`;

    let spinDirection = elementSpinDirection.value;
    if(spinDirection != "clockwise")
    {
        newLink = `${newLink}&autospinDirection=${spinDirection}`;
    }

    let hintText = elementHintText.value;
    if(hintText != "Drag to spin")
    {
        newLink = `${newLink}&hintText=${hintText}`;
    }

    elementNewLink.value = newLink;

    elementNewLinkFrame.setAttribute('src', newLink);
}
