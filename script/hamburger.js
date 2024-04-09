const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    hamburger.classList.toggle("toggle");
});

let allUls = document.querySelectorAll(".nav-links > li > ul");

function toggleCapabilities(para) {
    var capabilities = document.getElementById(`${para}`);
    if (capabilities.style.display === "none" || getComputedStyle(capabilities).display === "none") {
        allUls.forEach(e => {
            e.style.display = "none";
        })
        capabilities.style.display = "flex";
    } else {
        capabilities.style.display = "none";
    }
}
