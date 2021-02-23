const preview = document.getElementById("preview").getElementsByTagName("img")[0];
const thumbnail = document.querySelectorAll(".thumbnail");

// Fade in projects on load
window.addEventListener('load', (e) => {
    const timeline = gsap.timeline();
    timeline.to("header", {
        autoAlpha: 1,
        duration: 1.5,
    });
    timeline.to("footer", {
        autoAlpha: 1,
        duration: 1.5,
    }, "<");
    timeline.to("td", {
        autoAlpha: 1,
        duration: 0.75,
        stagger: 0.2,
    });
    // Set preview to first thumbnail img
    preview.src = thumbnail[0].firstElementChild.src;
})

// Thumbnail grid
thumbnail.forEach((element) => {
    element.addEventListener("mouseover", (e) => {
        preview.src = element.firstElementChild.src;
    });
})

const project = document.querySelectorAll(".project");
const footer = document.getElementsByTagName("footer")[0];
const plus = document.getElementsByClassName("plus")[0];
const bio = document.getElementsByClassName("bio")[0];
const about = document.getElementsByClassName("about")[0];

project.forEach((element) => {
    const parent = element.parentNode;
    const cross = parent.getElementsByClassName("cross")[0];
    const content = parent.getElementsByClassName("content")[0];
    const items = parent.querySelectorAll(".item");

    element.addEventListener("click", (e) => {
        const rowHeight = parseInt(getComputedStyle(document.body).getPropertyValue('--row-height'), 10);
        const rowPadding = parseInt(getComputedStyle(document.body).getPropertyValue('--row-padding'), 10);
        const padding = parseInt(getComputedStyle(document.body).getPropertyValue('--padding'), 10);
        const stickyOffset = (padding * 2) + rowPadding;
        const footerOffset = rowHeight + rowPadding;
        // Collapse footer if open
        if (bio.classList.contains("active")) {
            gsap.to(about, {
                height: 0,
                duration: 1,
                ease: Power3.easeOut,
            });
            gsap.to(footer, {
                bottom: 0,
                duration: 1,
                ease: Power3.easeOut,
            });
            gsap.to(plus, {
                rotate: 45,
                duration: 1,
                ease: Power3.easeOut,
            });
            bio.classList.remove("active");
        };
        // Close project
        if (element.classList.contains("active")) {
            const timeline = gsap.timeline({
                onComplete: element.classList.remove("active"),
                onComplete: footer.classList.remove("hidden"),
            });
            timeline.set(items, {
                autoAlpha: 0,
            });
            timeline.set(content, {
                display: "none",
            });
            timeline.set(project, {
                position: "relative",
                top: "unset",
            });
            timeline.to(cross, {
                rotate: 45,
                autoAlpha: 0,
            });
            timeline.to(footer, {
                bottom: 0,
                ease: Power3.easeOut,
                duration: 1,
            }, "<");
            timeline.to(plus, {
                autoAlpha: 1,
                duration: 1,
            }, "-0.5");
            timeline.set(bio, {
                cursor: "crosshair",
            }, "<");
            // Open project
        } else {
            const timeline = gsap.timeline({
                onComplete: element.classList.add("active"),
                onComplete: footer.classList.add("hidden"),
            });
            timeline.set(cross, {
                autoAlpha: 1,
            });
            timeline.set(content, {
                display: "block",
            });
            timeline.set(project, {
                position: "sticky",
                top: stickyOffset,
            });
            timeline.to(cross, {
                rotate: 90,
            });
            timeline.to(items, {
                autoAlpha: 1,
                duration: 1,
                // stagger: 0.5,
            }, "<");
            timeline.to(footer, {
                bottom: -Math.abs(footerOffset),
                ease: Power3.easeOut,
                duration: 1,
            }, "<");
            timeline.to(plus, {
                autoAlpha: 0,
                duration: 1,
            }, "-0.5");
            timeline.set(bio, {
                cursor: "default",
            }, "<");
        }
    });

    element.addEventListener("mouseover", (e) => {
        gsap.set(cross, {
            autoAlpha: 1,
        });
    });

    element.addEventListener("mouseout", (e) => {
        if (!element.classList.contains("active")) {
            gsap.set(cross, {
                autoAlpha: 0,
            });
        }
    });

});

// const toggle = (element) => {
//     const cross = element.getElementsByClassName("cross")[0];
//     const content = element.getElementsByClassName("content")[0];
//     const items = element.querySelectorAll(".item");
//     element.getElementsByClassName("info")[0].classList.toggle("fix");

//     if (element.classList.contains("active")) {
//         const timeline = gsap.timeline();
//         timeline.set(items, {
//             autoAlpha: 0,
//         });
//         timeline.set(content, {
//             display: "none",
//         });
//         timeline.to(cross, {
//             autoAlpha: 0,
//             duration: 0.5,
//         });
//         element.classList.remove("active");
//     } else {
//         gsap.set(content, {
//             display: "block",
//         });
//         gsap.to(cross, {
//             autoAlpha: 1,
//             duration: 0.5,
//         });
//         gsap.to(items, {
//             autoAlpha: 1,
//             duration: 1,
//             stagger: 0.5,
//         });
//         element.classList.add("active");
//     }

//     // Typewriter effect
//     const output = element.getElementsByClassName("typewriter")[0];
//     const description = element.getElementsByClassName("description")[0].innerHTML;
//     const typewriter = new Typewriter(output, {
//         delay: 40,
//     });
//     typewriter
//         .typeString(description)
//         .start();
// };

// Footer Expand

// Footer expand/collapse
bio.addEventListener("click", (element) => {
    const padding = getComputedStyle(document.body).getPropertyValue('--padding');
    if (!footer.classList.contains("hidden")) {
        if (bio.classList.contains("active")) {
            gsap.to(about, {
                height: 0,
                duration: 1,
                ease: Power3.easeOut,
            });
            gsap.to(footer, {
                bottom: 0,
                duration: 1,
                ease: Power3.easeOut,
            });
            gsap.to(plus, {
                rotate: 45,
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
            gsap.to(footer, {
                bottom: padding,
                duration: 1,
                ease: Power3.easeOut,
            });
            gsap.to(plus, {
                rotate: 180,
                duration: 1,
                ease: Power3.easeOut,
            });
            bio.classList.add("active");
        }
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



const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    observer: true,
    observeParents: true,

    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});