    document.getElementById("menuToggle").addEventListener("click", function () {
      document.getElementById("navLinks").classList.toggle("active");
    });
  
  
    const accordionButtons = document.querySelectorAll(".accordion-btn");

  accordionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      btn.classList.toggle("active");

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {

        document.querySelectorAll(".accordion-content").forEach((el) => {
          el.style.maxHeight = null;
          el.previousElementSibling.classList.remove("active");
        });

        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });