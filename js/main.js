// NAV MOBILE 

const hamburger = document.querySelector('.nav__burger')
const navMenu = document.querySelector('.nav__menu')

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

// STICKY
window.addEventListener('scroll', function () {
    nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 5)
})

// NAV DROPDOWN
function toggleDropdown() {
    var dropdownContent = document.getElementById("myDropdown");
    dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
}

function selectOption(option) {
    var selectedOptionBtn = document.getElementById("selectedOption");
    selectedOptionBtn.innerHTML = option.innerHTML;

    var allOptions = document.querySelectorAll(".dropdown-content a");
    allOptions.forEach(function (opt) {
        opt.classList.remove("selected");
    });

    option.classList.add("selected");

    toggleDropdown();
}

document.addEventListener("DOMContentLoaded", function () {
    var dropdown = document.querySelector('.nav__dropdown');
    dropdown.addEventListener('mouseleave', function () {
        this.querySelector('.dropdown-content').style.display = 'none';
    });
});




window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.querySelectorAll(".dropdown-content");
        dropdowns.forEach(function (dropdown) {
            dropdown.style.display = "none";
        });
    }
}
