let slideIndex = 1;
const slides = document.getElementsByClassName("slide");

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

setInterval(function () {
    plusSlides(1);
}, 5000);

showSlides(slideIndex);

function formatNumber(number) {
    if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'M+';
    } else if (number >= 100000) {
        return (number / 100000).toFixed(0) + 'L+';
    } else if (number >= 1000) {
        return (number / 1000).toFixed(0) + 'K+';
    } else {
        return number.toString() + '+';
    }
}

function startCounting(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.count');
            counters.forEach((counter) => {
                const target = counter.getAttribute('data-target');
                const targetArr = target.split(' ');
                const target1 = Number(targetArr[0]);
                const speed = 300;
                let count = 0;

                const updateCounter = () => {
                    const inc = target1 / speed;
                    if (count < target1) {
                        count += inc;
                        counter.innerText = Math.floor(count);
                        requestAnimationFrame(updateCounter);
                    } else if (targetArr.length === 1) {
                        counter.innerText = target1;
                    } else {
                        counter.innerText = formatNumber(target1);
                    }
                };

                updateCounter();
            });

            observer.unobserve(entry.target);
        }
    });
}

const observer = new IntersectionObserver(startCounting, { threshold: 1 });

const countContainers = document.querySelectorAll('.count-container');
countContainers.forEach((container) => {
    observer.observe(container);
});

var words = ['TOOLS & DIES', 'TOOLS & DIES'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 20,
    speed = 100;
var wordflick = function () {
    setInterval(function () {
        if (forwards) {
            if (offset >= words[i].length) {
                ++skip_count;
                if (skip_count == skip_delay) {
                    forwards = false;
                    skip_count = 0;
                }
            }
        }
        else {
            if (offset == 0) {
                forwards = true;
                i++;
                offset = 0;
                if (i >= len) {
                    i = 0;
                }
            }
        }
        part = words[i].substr(0, offset);
        if (skip_count == 0) {
            if (forwards) {
                offset++;
            }
            else {
                offset--;
            }
        }
        $('.word').text(part);
    }, speed);
};

$(document).ready(function () {
    wordflick();
});

document.addEventListener("DOMContentLoaded", function () {
    const transformImages = document.querySelectorAll(".serviceImg , .contactImgWrapper, .spotlights");

    function fadeInImages() {
        transformImages.forEach(function (image) {
            const imageTop = image.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (imageTop < windowHeight * 0.75) {
                image.classList.add("fade-in");
            }
        });
    }

    window.addEventListener("scroll", fadeInImages);
    window.addEventListener("resize", fadeInImages);

    fadeInImages();
});
