// making event listener for adding item
let addBTN = document.getElementById('addBtn');
addBTN.addEventListener('click', addItem);

// this creates a new li based on the entered value in the text box that it gets when you hit the button
// Through Research found that setAttribute isn't really needed and i can just use .id , .type etc
function addItem() {
  // Creating needed elements as well as getting text from textbox
  let newLi = document.createElement("li");
  let myLiValue = document.getElementById('textBoxAdd').value;
  let liTextNode = document.createElement("label");
  liTextNode.textContent = myLiValue;

  // makes div for li
  let newDivID = ('div_' + myLiValue);
  let newDiv = document.createElement('div');
  newDiv.id = newDivID;

  // makes checkboxes for the li 
  let newCheckBoxID = ('checkbox_' + myLiValue);
  let newCheckBox = document.createElement('input');
  newCheckBox.type = 'checkbox';
  newCheckBox.id = newCheckBoxID;


  // makes delete button for the li
  let newDeleteID = ('deleteButton_' + myLiValue);
  let newDeleteButton = document.createElement("button")
  newDeleteButton.type = 'button';
  newDeleteButton.id = newDeleteID
  newDeleteButton.innerHTML = 'Delete';

  // appends it to my newDiv
  newDiv.appendChild(newCheckBox);
  newDiv.appendChild(liTextNode);
  newDiv.appendChild(newDeleteButton);
  // then appends my new div to the new Li
  newLi.appendChild(newDiv);

  // this just makes sure a user cant enter in a blank value
  if (myLiValue == "") {
    alert("Please Enter Something Before Hitting Add Item");
  } else {
    document.getElementById('theNewList').appendChild(newLi);
    document.getElementById('textBoxAdd').value = "";
  }
}


//creating event listener for checkbox line through text and moving item
let theList = document.getElementById('theNewList');
theList.addEventListener('click', checkedComplete);

// function that will target every check box in the list and if any get checked then it will add a line through the text
function checkedComplete(event) {
  const checkboxElement = event.target;
  if (checkboxElement.type === 'checkbox') {
    if (checkboxElement.checked) {
      checkboxElement.nextElementSibling.style.textDecoration = 'line-through';

      // add in moving item
      const theList = document.getElementById('theNewList');
      const lastListItem = theList.lastChild;
      theList.insertBefore(lastListItem, checkboxElement.parentNode.parentNode);

    } else {
      checkboxElement.nextElementSibling.style.textDecoration = 'none';
    }
  }
}

// adds deleteItem listener to the list
theList.addEventListener('click', deleteItem);

function deleteItem(event) {
  const deleteButton = event.target;
  if (deleteButton.type === 'button') {
    const deleteParentNode = deleteButton.parentNode;
    deleteParentNode.parentNode.removeChild(deleteParentNode);
  }
}
