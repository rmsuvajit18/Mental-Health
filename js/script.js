document.querySelector(".toggler").addEventListener("click", function () {
    const menu = document.querySelector(".navbar-wrapper .menu-part");
    const icon = document.querySelector(".toggler i");

    menu.classList.toggle("d-menu");

    // Toggle icon
    if (menu.classList.contains("d-menu")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark"); // cross
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars"); // bars
    }
});

// active navigation highlighting + hide menu after click
let navlinks = document.querySelectorAll(".menu-part ul li a");
let menuPart = document.querySelector(".navbar-wrapper .menu-part");
let toggleIcon = document.querySelector(".toggler i");

for (let i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", function () {
        // remove old active
        for (let j = 0; j < navlinks.length; j++) {
            navlinks[j].classList.remove("activee");
        }
        this.classList.add("activee");

        // hide menu after click (remove d-menu class)
        menuPart.classList.remove("d-menu");

        // reset toggler icon back to bars
        toggleIcon.classList.remove("fa-xmark");
        toggleIcon.classList.add("fa-bars");
    });
}


//sticky-navbar on tablet screen 
let navBar = document.querySelector(".nav-bar");
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 61) {
        navBar.classList.add("sticky");
    }
    else {
        navBar.classList.remove("sticky");
    }
})

// form validation
let username = document.querySelector("#full_name");
let phone = document.querySelector("#phone");
let date = document.querySelector("#date");


function validateForm() {

    let flag = true
    //user-name validation
    if (username.value.trim() === "") {
        document.querySelector(".user-error").innerText = "User name is required.";
        flag = false;
    } else if (username.value.trim().length < 5) {
        document.querySelector(".user-error").innerText = "Name must be at least 5 characters.";
        flag = false;
    }
    else {
        document.querySelector(".user-error").innerText = "";
    }

    // phone-number validation

    if (phone.value.trim() === "") {
        document.querySelector(".phone-error").innerText = "Phone number is required.";
        flag = false
    } else if (!/^\d{10}$/.test(phone.value.trim())) {
        document.querySelector(".phone-error").innerText = "Phone number must be 10 digits.";
        flag = false;
    }
    else {
        document.querySelector(".phone-error").innerText = "";
    }

    // date validation

    if (date.value.trim() === "") {
        document.querySelector(".date-error").innerText = "Invalid date.";
        flag = false;
    }
    else {
        document.querySelector(".date-error").innerText = "";
    }

    return flag;
}

function handleSubmit(event) {
    event.preventDefault()  // stops form from reloding or seding data

    if (validateForm()) {
        alert("Form submitted successfully.");
        // optional: clear form data
        document.getElementById("myForm").reset();
    }
}

// login-logout

function openModal(id) {
    document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// Temporary users (reset on reload)
let users = [];

function signup() {
    let email = document.getElementById('signupEmail').value;
    let password = document.getElementById('signupPassword').value;

    if (email && password) {
        users.push({ email, password });
        alert("Signup Successful! Please login to continue.");

        // Close signup modal
        closeModal('signupModal');
        // Open login modal automatically
        openModal('loginModal');
    } else {
        alert("Please fill all fields.");
    }
}

function login() {
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;
    let user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert("Login Successful!");
        closeModal('loginModal');

        // ✅ After login, redirect or unlock page
        window.location.href = "https://logixor.in/";
    } else {
        alert("Invalid email or password.");
    }
}

// Scroll Event Based UI Interaction for dynamic experience


let btn = document.getElementById("scrollBtn");

window.addEventListener("scroll", function () {

    //page scroll
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    //displayarea height
    let windowHeight = window.innerHeight;
    // total document height
    let docHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= docHeight - 10) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

btn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"  // ✅ smooth animation
    });
});


// slider

$(document).ready(function () {

    $("#owlone").owlCarousel({
        items: 1,
        loop: true,
        margin: 10, // default margin
        autoplay: true,
        autoplayTimeout: 2500,
        autoplaySpeed: 1000,  // smooth autoplay transition
        smartSpeed: 1000,     // smooth manual navigation
        nav: true,
        dots: false,
        navText: [
            "<i class='fa-solid fa-arrow-left'></i>",
            "<i class='fa-solid fa-arrow-right'></i>"
        ],
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1,
            }
        }
    });

});
