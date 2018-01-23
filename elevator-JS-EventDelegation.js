/*
  PURPOSE
  Send a message to the log of which button is being pressed
  if 20 buttons do not exist, Add 20 new buttons when clicking on button four.
  if 20 buttons do exist, remove the last 16 buttons.
*/

// Define DOM variables
let ulElement = document.querySelector("ul")

//
function clickButton(event) {
   // Determine if the button was selected
   if (event.target.nodeName === "BUTTON") {
      console.log(event.target.innerText);

      // Determine if button "4" was selected
      if (event.target.innerText === "4") {

         // Define variables: newLiBtn for new Li and Button to create
         //                   Store btnToAdd as a variables to able to change
         let newLiBtn = "",
             btnToAdd = 20;

         // Determine if 20 buttons exist if not create them, Else delete them
         if (ulElement.children.length < btnToAdd) {
            for (var i = btnToAdd; i > 4; i--) {
               newLiBtn = event.path[1].cloneNode(true);
               newLiBtn.children[0].innerText = i;
               event.path[1].insertAdjacentElement('afterend',newLiBtn);
            }
         } else {
            for (var i = (ulElement.children.length - 1); i > 3; i--) {
               ulElement.removeChild(ulElement.children[i])
            }
         }
      }
   }
}

ulElement.addEventListener('click', clickButton, false);
