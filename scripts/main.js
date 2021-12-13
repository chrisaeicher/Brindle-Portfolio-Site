window.onload = function() {
    const hamMenu = document.getElementById("hamburger-menu");
    const mobileMenu = document.getElementById("mobile-menu");

    hamMenu.addEventListener("click", () => {
        hamMenu.classList.toggle("open");
        mobileMenu.classList.toggle("open");
    });
};