let icons = document.getElementById("ic");
let todoText = document.getElementById("todoText");

// Event Listener for add Items
icons.addEventListener("click", () => {
  addItems("Add your items");
});

function addItems(heading, parentNode = "") {

  //   creating node
  let pop = document.createElement("div");
  pop.className = "popup";
  let popHead = document.createElement("div");
  popHead.id = "popupHead";
  popHead.textContent = heading;
  let popInput = document.createElement("input");
  popInput.id = "popupInput";
  popInput.type = "text";
  popInput.placeholder = heading;

  let buttons = document.createElement("div");
  buttons.className = "buttons";

  let popAdd = document.createElement("button");
  popAdd.id = "popupAdd";
  popAdd.textContent = "Add";

  let popClose = document.createElement("button");
  popClose.id = "popupClose";
  popClose.textContent = "Close";

  // connecting nodes
  document.body.appendChild(pop);
  pop.appendChild(popHead);
  pop.appendChild(popInput);
  pop.appendChild(buttons);
  buttons.appendChild(popAdd);
  buttons.appendChild(popClose);

  if (heading === "Add new subitems") {
    popAdd.addEventListener("click", () => {
      if(popInput.value === "")
      {
        alert("Input box cannot be empty ,fill it")
      }
      else{
        creatingSubTask(popInput.value, parentNode);
       closingPop();
      }
    });
  } else if (heading === "Add your items") {
    popAdd.addEventListener("click", () => {
      if(popInput.value === "")
      {
        alert("Input box cannot be empty ,fill it")
      }
      else{
      createNewTask(popInput.value);
      }
      // to not show the text after the card creation
      todoText.style.display = "none";
      closingPop();
      pg1();
    });
  }

  //  closing the popup
  popClose.addEventListener("click", () => {
    closingPop();
  });

  //   closing pop up function
  function closingPop() {
    pop.remove();
    popInput.value = "";

    for (let i = 0; i < document.body.children.length; i++) {
      document.body.children[i].style.filter = "blur(0)";
    }
  }

  //   bg blur
  for (let i = 0; i < document.body.children.length; i++) {
    document.body.children[i].style.filter = "blur(5px)";
  }
  pop.style.filter = "blur(0)";
}

let section = document.querySelector("section");

function createNewTask(cardHeading) {
  // creating nodes
  let todoCard = document.createElement("div");
  todoCard.className = "todoCard";
  //   todoCard.classList.add("centerCard")

  let cardHead = document.createElement("div");
  cardHead.className = "cardHead";
  cardHead.textContent = cardHeading;
  cardHead.style.textTransform = "capitalize"
  cardHead.style.fontSize = "30px"

  let subTaskButtons = document.createElement("div");
  subTaskButtons.className = "subTaskButtons";

  let trash = document.createElement("img");
  //trash-icon(google Font)
  trash.src = "bin.png"

  //
  trash.id = "trash";
  let createSubTask = document.createElement("img");
  createSubTask.src = 'add_circle_FILL1_wght400_GRAD0_opsz48.svg'
  

  // connecting Nodes

  section.appendChild(todoCard);
  todoCard.appendChild(cardHead);
  todoCard.appendChild(subTaskButtons);
  subTaskButtons.appendChild(trash);
  subTaskButtons.appendChild(createSubTask);

  // creating sub tasks

  createSubTask.addEventListener("click", () => {
    addItems("Add new subitems", todoCard);
  });
  // deleting the card
  trash.addEventListener("click", () => {
    todoCard.remove();
    //This is dispalying the no item elements text when there is no cards
    if (section.children.length === 0) {
      todoText.style.display = "block";
    }
  });

  // Initializing page 2

  cardHead.addEventListener("click", () => {
    pg2(todoCard);
  });
}

// creating subtask function

function creatingSubTask(subTaskDesc, parentNode) {
  // Parent node is nothing but a todoCard of a specific card
  // creating nodes
  let subTaskRow = document.createElement("div");
  subTaskRow.className = "subTaskRow";

  let subTask = document.createElement("span");
  subTask.className = "subTask";
  subTask.textContent = subTaskDesc;
  subTask.style.textTransform = "capitalize"
  subTask.style.fontSize = "22px"

  let markDone = document.createElement("button");
  markDone.className = "markDone";
  markDone.textContent = "Mark Done";

  // connecting nodes
  parentNode.appendChild(subTaskRow);
  subTaskRow.appendChild(subTask);
  subTaskRow.appendChild(markDone);

  // mark done functionality

  markDone.addEventListener("click", () => {
    subTask.classList.add("checkedSubTask");
    markDone.remove();
  });
}

// Page 2 Implementation -------------------->
// back btn --------------->

let back = document.getElementsByClassName("bk")[0];
let headtoAdd = document.getElementById("headtoAdd");

back.addEventListener("click", () => {
  pg1();
});

// add button in page 2------------->

headtoAdd.addEventListener("click", () => {
  addItems("Add your items");
});

let head1 = document.getElementsByTagName("header")[0];
let head2 = document.getElementsByTagName("header")[1];
let pg2Head = document.getElementById("pg2Head");

function pg2(parentNode) {
  head1.style.display = "none";
  head2.style.display = "flex";
  parentNode.classList.add("centerCard");
  section.style.visibility = "hidden";
  pg2Head.textContent = parentNode.children[0].textContent;
  pg2Head.style.textTransform = "capitalize"
}

function pg1() {
  head1.style.display = "flex";
  head2.style.display = "none";
  section.style.visibility = "visible";
  removeClass();
}

// checking and removing if any centerCard class in any div
function removeClass() {
  for (let i = 0; i < section.children.length; i++) {
    section.children[i].classList.remove("centerCard");
  }
}