document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle-button");

    toggleButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const content = this.parentElement.nextElementSibling;

            if (content.style.maxHeight === "0px" || content.style.maxHeight === "") {
                content.style.maxHeight = content.scrollHeight + "px";
                this.classList.add("collapsed");
            } else {
                content.style.maxHeight = "0";
                this.classList.remove("collapsed");
            }
        });
    });
});
