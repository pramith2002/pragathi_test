const timeline = document.getElementById('timeline');

let scrollSpeed = 1;
let direction = 1;

function autoScrollTimeline() {
    timeline.scrollLeft += scrollSpeed * direction;

    if (timeline.scrollLeft >= timeline.scrollWidth - timeline.clientWidth) {
        direction = -1; 
    } else if (timeline.scrollLeft <= 0) {
        direction = 1; 
    }
}

setInterval(autoScrollTimeline, 20);
 