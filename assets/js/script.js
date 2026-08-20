AOS.init();

function openNav() {
    document.getElementById("myNav").style.height = "100vh";
}
  
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

const nav = document.querySelector("nav");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 1) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    }
)

document.querySelectorAll(".timetable").forEach(details => {
    const content = details.querySelector(".timetable-content");
    const summary = details.querySelector("summary");

    summary.addEventListener("click", e => {
        e.preventDefault();

        if (details.open) {
            content.style.height = content.scrollHeight + "px";

            requestAnimationFrame(() => {
                content.style.height = "0px";
            });

            content.addEventListener("transitionend", () => {
                details.open = false;
            }, { once: true });

        } else {
            details.open = true;

            content.style.height = "0px";

            requestAnimationFrame(() => {
                content.style.height = content.scrollHeight + "px";
            });

            content.addEventListener("transitionend", () => {
                content.style.height = "auto";
            }, { once: true });
        }
    });
});