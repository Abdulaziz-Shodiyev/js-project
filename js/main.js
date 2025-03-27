document.addEventListener("DOMContentLoaded", function () {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      
      tabBtns.forEach((b) => b.classList.remove("active"));

      setTimeout(() => {
        this.classList.add("active");
      }, 50);


      tabPanes.forEach((p) => {
        p.classList.remove("active");
        p.style.opacity = 0;
      });

      const tabId = this.getAttribute("data-tab");
      const activePane = document.getElementById(tabId);

      setTimeout(() => {
        activePane.classList.add("active");
        setTimeout(() => {
          activePane.style.opacity = 1;
        }, 50);
      }, 300);
    });
  });


  tabPanes.forEach((p) => {
    if (p.classList.contains("active")) {
      p.style.opacity = 1;
    } else {
      p.style.opacity = 0;
    }
  });
});
a;
