console.log ("Working");

const b1 = document.querySelector("#box1");
const b2 = document.querySelector("#box2");
const b3 = document.querySelector("#box3");

function hopeFn(){
    console.log("This box works!");
}

b1.addEventListener("click", hopeFn);

b2.addEventListener("click", hopeFn);

b3.addEventListener("click", hopeFn);