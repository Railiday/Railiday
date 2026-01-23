AOS.init();

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
  
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

function redirectToPage() {
    const selectedPage = document.getElementById('destination').value;

    if (selectedPage) {
        window.location.href = selectedPage;
    } else {
        alert("Gelieve een bestemming te kiezen.");
    }
}