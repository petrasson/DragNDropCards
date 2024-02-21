document.addEventListener("DOMContentLoaded", (event) => {
  let button = document.querySelector(".button");
  const dropzones = document.querySelectorAll(".dropzone");
  let totCard = document.querySelectorAll(".card").length; //number cards
  console.log("totCard", totCard);

  button.addEventListener("click", () => {
    const dropzone = dropzones[0];
    createCard(dropzone);
  });

  function createCard(dropzone) {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.setAttribute("draggable", true);
    const cards = dropzone.querySelectorAll(".card");
    const newIndex = cards.length + 1;
    newCard.textContent = "Card " + newIndex;
    dropzone.appendChild(newCard);
    totCard++;
    console.log(totCard);
    //updateDraggableCards();
  }

  let dragged;
  dropzones.forEach((dropzone) => {
    dropzone.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
    });

    dropzone.addEventListener("drop", (e) => {
      e.preventDefault();
      let targetDropzone = e.target.closest(".dropzone");
      if (targetDropzone) {
        targetDropzone.appendChild(dragged);
        updateDraggableCards();
      }
    });

    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("dragstart", (e) => {
        dragged = e.target;
      });
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
});

/*
document.addEventListener("DOMContentLoaded", () => {
  // Initial setup to make top cards draggable
  updateTopCardsDraggable();

  // Event delegation for the container to handle card drops
  const container = document.querySelector(".container");
  container.addEventListener("dragover", dragOver);
  container.addEventListener("dragenter", dragEnter);
  container.addEventListener("dragleave", dragLeave);
  container.addEventListener("drop", dragDrop);
});

function updateTopCardsDraggable() {
  document.querySelectorAll(".drop-zone").forEach((dropZone) => {
    const cards = Array.from(dropZone.querySelectorAll(".card"));
    // Ensure all cards are not draggable initially
    cards.forEach((card) => card.setAttribute("draggable", "false"));
    // Make only the top card draggable
    if (cards.length > 0) {
      const topCard = cards.reduce(
        (top, card) =>
          parseInt(card.style.top, 10) < parseInt(top.style.top, 10)
            ? card
            : top,
        cards[0]
      );
      topCard.setAttribute("draggable", "true");
      topCard.addEventListener("dragstart", dragStart);
      topCard.addEventListener("dragend", dragEnd);
    }
  });
}

function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  this.classList.add("hold");
  setTimeout(() => this.classList.add("invisible"), 0);
}

function dragEnd() {
  this.classList.remove("hold", "invisible");
  updateTopCardsDraggable(); // Update draggable top card after a drop
}

function dragOver(e) {
  e.preventDefault(); // Allow the drop
}

function dragEnter(e) {
  if (e.target.classList.contains("drop-zone")) {
    e.preventDefault();
    e.target.classList.add("hovered");
  }
}

function dragLeave(e) {
  if (e.target.classList.contains("drop-zone")) {
    e.target.classList.remove("hovered");
  }
}

function dragDrop(e) {
  e.preventDefault();
  const droppedId = e.dataTransfer.getData("text/plain");
  const droppedElement = document.getElementById(droppedId);
  if (e.target.classList.contains("drop-zone")) {
    e.target.classList.remove("hovered");
    // Append to the drop zone, ensuring it appears on top
    e.target.style.position = "relative";
    droppedElement.style.top = "60px"; // Adjust based on your needs
    e.target.prepend(droppedElement); // Prepend to make it on top
  }
  updateTopCardsDraggable(); // Update draggable top card after a drop
}




const container = document.querySelector(".container");
const dropZones = document.querySelectorAll(".drop-zone");
const cards = document.querySelectorAll(".card");

//fill Listeners

//deligation on the container

//Drag FUnctions
function dragStart() {
  this.classList.add("hold");
  //console.log("start");
  setTimeout(() => this.classList.add("invisible"), 0);
}

function dragEnd() {
  //console.log("end");
  this.classList.remove("hold", "invisible");
}

function dragOver(e) {
  if (e.target.classList.contains("drop-zone")) {
    e.preventDefault();
  }
  //console.log("over");
}

function dragEnter(e) {
  if (e.target.classList.contains("drop-zone")) {
    e.preventDefault();
    e.target.classList.add("hovered");
  }

  //console.log("enter");
}

function dragLeave(e) {
  if (e.target.classList.contains("drop-zone")) {
    e.target.classList.remove("hovered");
  }
}

function dragDrop(e) {
  if (e.target.classList.contains("drop-zone")) {
    e.target.classList.remove("hovered");
    e.target.append(fill);
  }
}
*/
