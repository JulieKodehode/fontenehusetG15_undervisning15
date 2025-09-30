// H = Henter noe
const submitButton = document.querySelector("#submitButton");
console.log(submitButton);

// M = Modifiserer noe
function gatherData() {
  console.log("Button clicked?");

  // H = Hente elementer
  const greetingInput = document.querySelector("#greetingInput");
  const greetingInputValue = greetingInput.value;
  console.log(greetingInput);
  console.log(greetingInputValue);

  const numberInput = document.querySelector("#numberInput").value;
  console.log(numberInput);

  const displayFormInputs = document.querySelector("#displayFormInputs");

  // L = Lage elementer
  const displayGreeting = document.createElement("p");

  // M = Modifisere elementer
  displayFormInputs.textContent = greetingInputValue;
  displayFormInputs.textContent = numberInput;
  displayFormInputs.textContent = greetingInputValue + " " + numberInput;
  displayFormInputs.textContent = `${greetingInputValue} ${numberInput}`;

  displayGreeting.textContent = greetingInputValue;

  // S = Sende elementer
  displayFormInputs.appendChild(displayGreeting);
}

// S = Sender noe
submitButton.addEventListener("click", gatherData);