"use strict";

const dataSections = document.querySelectorAll("[data-section]");
const allSections = document.querySelectorAll(".section");

// const tl = gsap.timeline();

const gsapSectionFuncs = [
    function () {
        animateHeader();
    },
    function () {
        animateHero();
    },
    function () {
        animateWinLoss();
    },
    function () {
        animateAbout();
    },
    function () {
        animateContact();
    },
    function () {
        animateSponsors();
    },
    function () {
        animateFooter();
    },
    function () {
        animateFieldCards();
    },
    function () {
        animateLocsAbout();
    },
];

const revealSection = function (entries, observer) {
    const [entry] = entries;
    console.log(entry);

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // console.log(
            //     "executing:",
            //     gsapSectionFuncs[entry.target.dataset.section]
            // );
            entry.target.classList.remove("section--hidden");
            gsapSectionFuncs[entry.target.dataset.section]();
            observer.unobserve(entry.target);
        }
    });
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: [0.15],
});

allSections.forEach(function (section) {
    sectionObserver.observe(section);
    console.log("hiding ", section);
    section.classList.add("section--hidden");
});

const animateHeader = () => {
    gsap.from(".header-section", {
        opacity: 0,
        duration: 1,
        y: -50,
        ease: Power4.easeOut,
    });
};

const animateHero = () => {
    gsap.from(".hero-section", {
        opacity: 0,
        duration: 1,
        y: 150,
        ease: Power4.easeOut,
        stagger: 0.1,
    });
};

const animateWinLoss = () => {
    const wl = gsap.timeline();
    wl.from(".win-loss-container", {
        opacity: 0,
        duration: 0.3,
        x: 150,
        ease: Power4.easeOut,
    })

        .from(
            ".schedule-text-content h3",
            {
                opacity: 0,
                duration: 0.3,
                x: 150,
                ease: Power4.easeOut,
            },
            "-=.3"
        )

        .from(
            ".schedule-text-content p",
            {
                opacity: 0,
                duration: 0.3,
                x: 150,
                ease: Power4.easeOut,
                stagger: 0.1,
            },
            "-=.3"
        )

        .from(
            ".schedule-grid",
            {
                opacity: 0,
                duration: 0.3,
                x: 150,
                ease: Power4.easeOut,
            },
            "-=.3"
        )

        .from(
            ".grid-col",
            {
                opacity: 0,
                duration: 0.3,
                x: 150,
                ease: Power4.easeOut,
                stagger: 0.08,
            },
            "-=.3"
        );
};

const animateAbout = () => {
    gsap.from(".about-section", {
        opacity: 0,
        duration: 1,
        y: 150,
        ease: Power4.easeOut,
    });
};

const animateContact = () => {
    gsap.from(".contact-section", {
        opacity: 0,
        duration: 1,
        y: 150,
        ease: Power4.easeOut,
    });
};

const animateSponsors = () => {
    const sp = gsap.timeline();
    const offset = "-=.7";
    sp.from(".sponsors-text h3", {
        opacity: 0,
        duration: 1,
        x: 150,
        ease: Power4.easeOut,
    })
        .from(
            ".sponsors-text p",
            {
                opacity: 0,
                duration: 1,
                x: 150,
                ease: Power4.easeOut,
                stagger: 0.25,
            },
            offset
        )
        .from(
            ".sponsor-icon",
            {
                opacity: 0,
                duration: 0.5,
                x: 150,
                ease: Power4.easeOut,
                stagger: 0.1,
            },
            offset
        );
};

const animateFooter = () => {
    gsap.from(".footer-section div", {
        opacity: 0,
        duration: 1,
        y: 150,
        ease: Power4.easeOut,
        stagger: 0.1,
    });
};

const animateFieldCards = () => {
    gsap.from(".field-locs-section section", {
        opacity: 0,
        duration: 1,
        y: 150,
        ease: Power4.easeOut,
        stagger: 0.25,
    });
};

const animateLocsAbout = () => {
    const la = gsap.timeline();
    la.from(
        ".field-locs-aside h3",
        {
            opacity: 0,
            duration: 0.5,
            y: 100,
            ease: Power4.easeOut,
        },
        "-=.2"
    ).from(
        ".field-locs-aside p",
        {
            opacity: 0,
            duration: 0.5,
            y: 100,
            ease: Power4.easeOut,
            stagger: 0.1,
        },
        "-=.2"
    );
};
