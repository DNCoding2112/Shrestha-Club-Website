document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle-button");

    toggleButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const content = this.parentElement.nextElementSibling;

            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
                this.textContent = "-";
            } else {
                content.style.display = "none";
                this.textContent = "+";
            }
        });
    });
});
