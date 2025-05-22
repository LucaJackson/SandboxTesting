document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("goToPage1");
    const button2 = document.getElementById("goToHomePage");
    
    button.addEventListener("click", () => {
        window.location.href = "page1.html";
    });
    button2.addEventListener("click", () => {
        window.location.href = "index.html";
    });
});
