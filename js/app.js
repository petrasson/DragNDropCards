document.addEventListener("DOMContentLoaded", (event) => {
  const button = document.querySelector(".button");
  const dropzone = document.querySelector("#dropzone-left");
  const container = document.querySelector(".container");

  button.addEventListener("click", () => {
    createCard(dropzone);
  });

  function createCard(dropzone) {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.setAttribute("draggable", true);
    const cards = document.querySelectorAll(".card");
    const newIndex = cards.length + 1;
    newCard.textContent = "Card " + newIndex;
    dropzone.appendChild(newCard);
  }

  let dragged;

  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    console.log("dragover");
  });
  container.addEventListener("dragstart", (e) => {
    dragged = e.target;
    console.log("dragged", dragged);
  });

  container.addEventListener("drop", (e) => {
    //kolla upp den här
    e.preventDefault();
    let targetDropzone = e.target.closest(".dropzone");
    if (targetDropzone) {
      targetDropzone.appendChild(dragged);
      updateDraggableCards();
    }
    console.log("drop");
  });

  function updateDraggableCards() {
    document.querySelectorAll(".dropzone").forEach((dropzone) => {
      let cards = dropzone.querySelectorAll(".card");
      cards.forEach((card) => card.setAttribute("draggable", false));
      if (cards.length) {
        cards[cards.length - 1].setAttribute("draggable", true);
      }
    });
  }
});
