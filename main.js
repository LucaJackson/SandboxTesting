document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("goToPage1");  
    button.addEventListener("click", () => {
        window.location.href = "page1.html";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const button2 = document.getElementById("goToHomePage");
    button2.addEventListener("click", () => {
        window.location.href = "index.html";
    });
});
