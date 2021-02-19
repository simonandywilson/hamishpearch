// Fade in projects on load
window.addEventListener('load', (e) => {
    gsap.to("td", {
        autoAlpha: 1,
        duration: 0.5,
        stagger: 0.25,
    });
})

const toggle = (element) => {
    const cross = element.getElementsByClassName("cross")[0];
    const content = element.getElementsByClassName("content")[0];
    const items = element.querySelectorAll(".item");
    element.getElementsByClassName("info")[0].classList.toggle("fix");

    if (element.classList.contains("active")) {
        const timeline = gsap.timeline();
        timeline.set(items, {
            autoAlpha: 0,
        });
        timeline.set(content, {
            display: "none",
        });
        timeline.to(cross, {
            autoAlpha: 0,
            duration: 0.5,
        });
        element.classList.remove("active");
    } else {
        gsap.set(content, {
            display: "block",
        });
        gsap.to(cross, {
            autoAlpha: 1,
            duration: 0.5,
        });
        gsap.to(items, {
            autoAlpha: 1,
            duration: 1,
            stagger: 0.5,
        });
        element.classList.add("active");
    }

    // Typewriter effect
    const output = element.getElementsByClassName("typewriter")[0];
    const description = element.getElementsByClassName("description")[0].innerHTML;
    const typewriter = new Typewriter(output, {
        delay: 40,
    });
    typewriter
        .typeString(description)
        .start();
};

// Footer Expand
const bio = document.getElementsByClassName("bio")[0];
const about = document.getElementsByClassName("about")[0];
const footer = document.getElementsByTagName("footer")[0];
bio.addEventListener("click", (element) => {
    const padding = getComputedStyle(document.body).getPropertyValue('--padding');
    if (bio.classList.contains("active")) {
        gsap.to(about, {
            height: 0,
            duration: 1,
            ease: Power3.easeOut,
        });
        gsap.to("footer", {
            bottom: 0,
            duration: 1,
            ease: Power3.easeOut,
        });
        bio.classList.remove("active");
    } else {
        gsap.set(about, {
            height: "auto",
        });
        gsap.from(about, {
            height: 0,
            duration: 1,
            ease: Power3.easeOut,
        });
        gsap.to("footer", {
            bottom: padding,
            duration: 1,
            ease: Power3.easeOut,
        });
        bio.classList.add("active");
    }
})







// const ele = document.getElementsByClassName('slider')[0];

// let pos = {
//     top: 0,
//     left: 0,
//     x: 0,
//     y: 0
// };

// const mouseDownHandler = function (e) {
//     ele.style.cursor = 'grabbing';
//     ele.style.scrollSnapType = "none";

//     pos = {
//         // Get current scroll position
//         left: ele.scrollLeft,
//         top: ele.scrollTop,
//         // Get the current mouse position
//         x: e.clientX,
//         y: e.clientY,
//     };

//     document.addEventListener('mousemove', mouseMoveHandler);
//     document.addEventListener('mouseup', mouseUpHandler);
// };

// const mouseMoveHandler = function (e) {
//     // How far the mouse has been moved
//     const dx = e.clientX - pos.x;
//     const dy = e.clientY - pos.y;

//     // Scroll the element
//     ele.scrollTop = pos.top - dy;
//     ele.scrollLeft = pos.left - dx;
// };

// const mouseUpHandler = function () {
//     ele.style.cursor = 'grab';
//     ele.style.scrollSnapType = "x mandatory";

//     document.removeEventListener('mousemove', mouseMoveHandler);
//     document.removeEventListener('mouseup', mouseUpHandler);
// };

// // Attach the handler
// ele.addEventListener('mousedown', mouseDownHandler);