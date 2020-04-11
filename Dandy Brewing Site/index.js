console.log ("Spinning up")
const acc = document.getElementsByClassName("accordion");
const final = document.getElementById("dynamic");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const n = new Date;
final.textContent= n.getFullYear();
