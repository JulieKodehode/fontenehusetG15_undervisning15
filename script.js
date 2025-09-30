// Hente et element = Hente
const hamburgerImg = document.querySelector("#hamburgerImg");

// Alternativ 1:
// Ha en funksjon = Modifiserer
// Laget en funksjon som henter navList-elementet og bytter klassenavn for synlig/usynlig
function hamburgerToggle() {
  console.log("Hi from hamburgerToggle");

  const navListElement = document.querySelector(".navList"); // Bevist brukt klasse for kun et element med det klassenavnet
  console.log(navListElement);

  // Metode 1: Skrive CSS i JS som blir inline-CSS
  navListElement.style.display = "flex";
  navListElement.style.flexDirection = "column";
}

// Aktiverer en funksjon = Sender
hamburgerImg.addEventListener("click", hamburgerToggle);
