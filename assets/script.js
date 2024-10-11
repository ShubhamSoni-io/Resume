document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll("nav ul li a");

    navbarLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            const offset = targetSection.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top: offset,
                behavior: "smooth"
            });
        });
    });
});
