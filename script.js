/* ==========================================
   NISHANT SINGH PORTFOLIO
   script.js
========================================== */

// ===============================
// Typing Effect
// ===============================

var typed = new Typed(".typing", {
    strings: [
        "Website Designer",
        "Frontend Developer",
        "B.Tech CSE Student",
        "Data Science Learner",
        "C & C++ Programmer"
    ],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

// ===============================
// Particles
// ===============================

particlesJS("particles-js", {
    particles: {
        number: {
            value: 80
        },
        color: {
            value: "#00d9ff"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5
        },
        size: {
            value: 3
        },
        move: {
            enable: true,
            speed: 2
        },
        line_linked: {
            enable: true,
            color: "#00d9ff",
            opacity: 0.4
        }
    }
});

// ===============================
// Dark / Light Mode
// ===============================

const toggle = document.querySelector(".theme-toggle");

let dark = true;

toggle.addEventListener("click", () => {

    if (dark) {

        document.documentElement.style.setProperty("--bg", "#ffffff");
        document.documentElement.style.setProperty("--bg2", "#eef5ff");
        document.documentElement.style.setProperty("--white", "#111111");
        document.documentElement.style.setProperty("--text", "#444444");

        toggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        document.documentElement.style.setProperty("--bg", "#050816");
        document.documentElement.style.setProperty("--bg2", "#0b1227");
        document.documentElement.style.setProperty("--white", "#ffffff");
        document.documentElement.style.setProperty("--text", "#d9e7ff");

        toggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

    dark = !dark;

});

// ===============================
// Scroll Reveal
// ===============================

const reveals = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    reveals.forEach((item) => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0px)";

        }

    });

});

reveals.forEach((item) => {

    item.style.opacity = "0";
    item.style.transform = "translateY(70px)";
    item.style.transition = "1s";

});

// ===============================
// Navbar Background
// ===============================

window.addEventListener("scroll", () => {

    const nav = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        nav.style.background = "rgba(0,0,0,.7)";

    } else {

        nav.style.background = "rgba(0,0,0,.35)";

    }

});

// ===============================
// Active Menu
// ===============================

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        links.forEach(l => l.classList.remove("active"));

        link.classList.add("active");

    });

});

// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:25px;
right:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#00d9ff;
color:black;
font-size:22px;
cursor:pointer;
display:none;
box-shadow:0 0 15px #00d9ff;
z-index:1000;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ===============================
// Contact Form
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    alert("Thank You! Your message has been received.");

    form.reset();

});

// ===============================
// Console Message
// ===============================

console.log("Portfolio by Nishant Singh");