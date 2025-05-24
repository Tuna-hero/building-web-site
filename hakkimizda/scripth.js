    document.getElementById("menuToggle").addEventListener("click", function () {
      document.getElementById("navLinks").classList.toggle("active");
    });

      document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter-ozel");

    function startCount() {
      counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const increment = Math.ceil(target / 10000);

        const updateCount = () => {
          if (count < target) {
            count += increment;
            counter.textContent = count > target ? target : count;
            requestAnimationFrame(updateCount);
          } else {
            counter.textContent = target;
          }
        };

        updateCount();
      });
    }

    startCount();
  });