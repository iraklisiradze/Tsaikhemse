let buttons = document.getElementsByClassName ("add");
console.log(buttons.length);
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click",function() {
          
this.classList.toggle("added");
if (this.classList.contains("added")) {
    this.textContent="დამატებულია";
}
else {
    this.textContent="დამატება";
}

    } );
    }
    