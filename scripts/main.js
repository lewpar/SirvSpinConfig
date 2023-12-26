const elementSpeed = document.querySelector("#sirv-spin-speed");
const elementRange = document.querySelector("#sirv-spin-range");
const elementSpin = document.querySelector("#sirv-spin");
const elementSpinDirection = document.querySelector("#sirv-spin-direction");
const elementLink = document.querySelector("#link");
const elementNewLinkFrame = document.querySelector("#new-link-frame");
const elementHintText = document.querySelector("#sirv-hint-text");

let spinSpeed = elementRange.value;

elementSpeed.textContent = elementRange.value;
elementRange.addEventListener("input", (event) => {
  elementSpeed.textContent = event.target.value;
  spinSpeed = event.target.value;
  updateLink();
});

elementSpin.addEventListener("input", updateLink);
elementLink.addEventListener("input", updateLink);
elementSpinDirection.addEventListener("input", updateLink);
elementHintText.addEventListener("input", updateLink);

async function updateLink()
{
    let elementLink = document.querySelector("#link");
    let link = elementLink.value;

    let elementNewLink = document.querySelector('#new-link');

    if(!link)
    {
        elementNewLink.value = "";
        return;
    }

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

    let result = await testLink(newLink);
    let elementError = document.querySelector('#sirv-error');
    elementError.innerText = "";

    elementNewLink.value = newLink;

    if(!result)
    {
        elementError.innerText = "There is an error with the link.";
        return;
    }

    elementNewLinkFrame.setAttribute('src', newLink);
}

async function testLink(link)
{
    let result = await fetch(link);
    return result.ok;
}