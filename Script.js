// Welcome message
window.onload = function() {
    console.log("Welcome to Ahmed Endris Portfolio");
};

// Smooth scrolling for links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();
