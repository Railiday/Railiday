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