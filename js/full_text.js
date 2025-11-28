
  document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".con-after .read-more");

    toggles.forEach(function (toggle) {
      toggle.addEventListener("click", function () {
        const container = this.closest(".con-after");
        container.classList.toggle("show-more");

        if (container.classList.contains("show-more")) {
          this.textContent = "Show less";
        } else {
          this.textContent = "Read more";
        }
      });
    });
  });
