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
                stagger: 0.5,
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

const swiper = new Swiper('.swiper-container', {
    observer: true,
    observeParents: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});