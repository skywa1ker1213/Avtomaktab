document.getElementById("filterYear").addEventListener("change", applyFilter);
document.getElementById("filterMonth").addEventListener("change", applyFilter);

function applyFilter() {
    const selectedYear = document.getElementById("filterYear").value;
    const selectedMonth = document.getElementById("filterMonth").value;
    const slider = document.querySelector(".important__block-box");

    const items = Array.from(document.getElementsByClassName("important__block"));

    items.forEach(function (item) {
        const year = parseInt(item.getAttribute("data-year"));
        const month = parseInt(item.getAttribute("data-month"));

        if ((selectedYear === "all" || year === parseInt(selectedYear)) &&
            (selectedMonth === "all" || month === parseInt(selectedMonth))) {
            item.classList.add("flex");
            item.classList.remove("none");
        } else {
            item.classList.add("none");
            item.classList.remove("flex");
        }

        slider.classList.remove("gap");
    });
}
