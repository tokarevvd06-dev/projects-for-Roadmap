const area =  document.querySelector("#text");
const block = document.querySelector("#block");
const counter = document.querySelector(".counter");
area.addEventListener("input", () => {
    counter.textContent = " / 250";
    counter.textContent = Number(area.value.length) + counter.textContent;

    
    if (Number(area.value.length) >= 250) {
        area.classList.add("after")
        block.classList.add("after")

    } else{
        area.classList.remove("after")
        block.classList.remove("after")


    }
})