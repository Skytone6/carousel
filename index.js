const scene = document.querySelectorAll(".scene");
const allScenes = scene.length;
const circle = document.querySelectorAll(".circle");
let scenePosition = 0;

let hideScenes = () => {
    for (let scenes of scene) {
        scenes.classList.remove("visible");
        scenes.classList.add("hidden");
    }

    for (let circles of circle) {
        circles.classList.remove("active");
        circles.classList.add("inactive");
    }
}

let visibility = (show) => {
    scene[show].classList.remove("hidden");
    scene[show].classList.add("visible");

    circle[show].classList.remove("inactive");
    circle[show].classList.add("active");
}

document.querySelector("#left-btn").addEventListener("click", () => {
    hideScenes();

    if (scenePosition === 0) {
        scenePosition = allScenes - 1;
    } else {
        scenePosition--;
    }

    visibility(scenePosition);
});

document.querySelector("#right-btn").addEventListener("click", () => {
    hideScenes();

    if (scenePosition === allScenes - 1){
        scenePosition = 0;
    }
    else {
        scenePosition++;
    }

    visibility(scenePosition);
});

