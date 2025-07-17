// ✅ TechInspire Homepage Script (Customized)
// ---------------------------------------------

// 🔁 Locomotive Scroll + GSAP ScrollTrigger Setup
const locowrapper = () => {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#wrapper"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#wrapper", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#wrapper").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
};
locowrapper();


// 📌 Post Button to Show Post Form
const postButton = document.querySelector("#p1 button");
const ap = document.querySelector("#ap");
const apbtn = document.querySelector("#mainbtn");
const summary = document.querySelector("#summary");

postButton.addEventListener("click", function() {
    ap.style.display = "initial";
});

apbtn.addEventListener("click", function() {
    gsap.to(summary, {
        display: "initial",
    });
});

document.addEventListener("dblclick", function() {
    gsap.to(ap, { display: "none" });
    gsap.to(summary, { display: "none" });
});


// 📌 Navbar Scroll Animation
let nav = document.querySelector("#Navigation");
let mainpage = document.querySelector("#mainpage");
let main = document.querySelector("#Main");

gsap.to(mainpage, {
    scrollTrigger: {
        trigger: mainpage,
        scroller: "#wrapper",
        start: "top 0%",
        end: "top -200%",
        scrub: 1,
        pin: true,
    }
});

gsap.to(main, {
    transform: "translateY(-1500%)",
    scrollTrigger: {
        trigger: main,
        scroller: "#wrapper",
        start: "top 0%",
        end: "top -500%",
        scrub: 1,
    }
});

gsap.to(nav, {
    y: -10,
    scrollTrigger: {
        trigger: nav,
        scroller: "#wrapper",
        start: "top 0%",
        end: "top -20%",
        scrub: 1,
    }
});


// 🚀 Homepage Project Data Cards
const homepage = [
    {
        dp: "https://randomuser.me/api/portraits/men/45.jpg",
        stname: "Aryan Sharma",
        collegename: "IIT Bombay",
        details: "Built an AI facial recognition app with Flask and OpenCV to detect and recognize faces in real-time.",
        skills: "Python, OpenCV, Flask, AI",
        pjimg: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*4t-QmEo_8fwD_xcE9yZ6Ng.png"
    },
    {
        dp: "https://randomuser.me/api/portraits/women/48.jpg",
        stname: "Neha Verma",
        collegename: "NIT Trichy",
        details: "Developed a platform to match startups with interns using React, Node.js, and Firebase.",
        skills: "React, Node.js, Firebase, MongoDB",
        pjimg: "https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-engine.jpg"
    },
    {
        dp: "https://randomuser.me/api/portraits/men/32.jpg",
        stname: "Raj Patel",
        collegename: "BITS Pilani",
        details: "Created a crop recommendation system using ML that guides farmers on what to plant based on soil data.",
        skills: "Sklearn, Pandas, Python, ML",
        pjimg: "https://builtin.com/sites/default/files/styles/og/public/2022-09/machine-learning-applications.png"
    },
    {
        dp: "https://randomuser.me/api/portraits/women/52.jpg",
        stname: "Sneha Iyer",
        collegename: "IIIT Hyderabad",
        details: "Built a mobile app that connects with fitness bands via BLE and shows real-time heart rate and steps.",
        skills: "Flutter, Dart, BLE API",
        pjimg: "https://cdn.dribbble.com/userupload/6782135/file/original-13a63b7bb74ab4c1fbb3479c385c502c.png"
    }
];

let clutter = "";

homepage.forEach(function(elem) {
    clutter += `
    <div id="display">
        <div id="display-s1">
            <img src="${elem.dp}" alt="">
            <div id="about-person">
                <h3>${elem.stname}</h3>
                <h4>${elem.collegename}</h4>
                <p>Young innovator passionate about tech</p>
            </div>
        </div>
        <div id="display-s2">
            <div id="discription-section">
                <h3>#Project title</h3>
                <p>${elem.details}</p>
            </div>
            <div id="control-section">
                <h3>#Skills Used</h3>
                <p>${elem.skills}</p>
            </div>
            <div id="vision-section">
                <img src="${elem.pjimg}" alt="project thumbnail">
            </div>
        </div>
    </div>`;
});

document.querySelector("#Main").innerHTML = clutter;


// 📱 Mobile Navigation
const h5 = document.querySelector("#Navigation-right > h5");
const mnav = document.querySelector("#mnav");

h5.addEventListener("click", function() {
    mnav.style.display = "initial";
});

document.querySelector("#mnav > h5").addEventListener("click", function() {
    mnav.style.display = "none";
});
