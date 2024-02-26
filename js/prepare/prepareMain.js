const toggleButton = document.getElementById('toggleButton');
const hiddenBlocks = document.getElementById('hiddenBlocks');
const elementsToHide = document.querySelectorAll('.toHide');

let blocksHidden = true; // Начальное состояние - блоки скрыты

// Скрываем блоки при загрузке страницы
elementsToHide.forEach(element => {
    element.style.display = 'none';
});

toggleButton.addEventListener('click', function () {
    if (blocksHidden) {
        elementsToHide.forEach(element => {
            element.style.display = 'flex';
        });
    } else {
        elementsToHide.forEach(element => {
            element.style.display = 'none';
        });
    }
    blocksHidden = !blocksHidden;
});

// Добавляем функциональность табов
function openCity(evt, tabIndex) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    tabcontent[tabIndex].style.display = "grid";
    evt.currentTarget.classList.add("active");

    // If the tabIndex is 0 (first tab), ensure it remains visible
    if (tabIndex === 0) {
        tabcontent[0].style.display = "grid";
        tablinks[0].classList.add("active");
    }
}

// Ensure the first tab content is visible when the page loads
window.onload = function() {
    var firstTabContent = document.getElementsByClassName("tabcontent")[0];
    firstTabContent.style.display = "grid";

    var firstTabLink = document.getElementsByClassName("tablinks")[0];
    firstTabLink.classList.add("active");
};




