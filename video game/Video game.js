let human = document.querySelector(".human");
let input = document.querySelector("input");

let x = 0, y = 0;

human.style.position = "relative";

input.addEventListener("keydown", function (event) {

    if (event.code == "ArrowRight") {
        x += 10;
        human.style.left = x + "px";
        console.log("Character moved Right");
    }

    else if (event.code == "ArrowLeft") {
        x -= 10;
        human.style.left = x + "px";
        console.log("Character moved Left");
    }

    else if (event.code == "ArrowUp") {
        y -= 10;
        human.style.top = y + "px";
        console.log("Character moved Up");
    }

    else if (event.code == "ArrowDown") {
        y += 10;
        human.style.top = y + "px";
        console.log("Character moved Down");
    }
});