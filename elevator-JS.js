/* Send a message to the log of which button is being pressed using basic javaquery */
document.querySelectorAll("button").forEach (function(eachButton) {
  eachButton.addEventListener("click", function () {console.log(this.textContent)});
  }
)
