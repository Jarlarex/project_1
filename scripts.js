const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;
let originalText = null;

const liElements = document.querySelectorAll("li");

for (let i = 0; i < liElements.length; i++) {
    liElements[i].addEventListener("mouseover", event => {
        let iteration = 0;
        originalText = event.target.innerText; // Store the original text

        clearInterval(interval);

        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if(index < iteration) {
                        return event.target.dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");

            if(iteration >= event.target.dataset.value.length){
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 15);
    });

    liElements[i].addEventListener("mouseout", event => {
        clearInterval(interval);
        event.target.innerText = originalText; // Reset to original text
    });
}

const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("mouseenter", () => {
    menu.classList.add("show");
});

menu.addEventListener("mouseleave", () => {
    menu.classList.remove("show");
});


