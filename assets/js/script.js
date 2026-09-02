AOS.init();

function openNav() {
    document.getElementById("myNav").style.height = "100vh";
}
  
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

document.querySelectorAll(".details").forEach(details => {
    const summary = details.querySelector("summary");
    const content = details.querySelector(".details-content");

    summary.addEventListener("click", (e) => {
        e.preventDefault();

        if (details.open) {
            const height = content.scrollHeight;
            content.style.height = height + "px";

            requestAnimationFrame(() => {
                content.style.height = "0px";
            });

            content.addEventListener("transitionend", function handler() {
                details.open = false;
                content.removeEventListener("transitionend", handler);
            });
        } 
        else {
            details.open = true;

            const height = content.scrollHeight;
            content.style.height = "0px";

            requestAnimationFrame(() => {
                content.style.height = height + "px";
            });

            content.addEventListener("transitionend", function handler() {
                content.style.height = "auto";
                content.removeEventListener("transitionend", handler);
            });
        }
    });
});