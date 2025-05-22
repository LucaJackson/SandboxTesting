document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("goToPage1");  
    button.addEventListener("click", () => {
        window.location.href = "page1.html";
    });
});
