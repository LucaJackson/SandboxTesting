document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("goToHomePage");
    button.addEventListener("click", () => {
        window.location.href = "index.html";
    });
});
