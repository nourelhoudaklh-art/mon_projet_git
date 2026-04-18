


document.querySelectorAll(".stars").forEach(starContainer => {

    const stars = starContainer.querySelectorAll("span");
    const message = starContainer.nextElementSibling;
  
    stars.forEach((star, index) => {
      star.addEventListener("click", () => {
  
        // reset
        stars.forEach(s => s.classList.remove("active"));
  
        // color stars
        for (let i = 0; i <= index; i++) {
          stars[i].classList.add("active");
        }
  
        // hide stars + show message
        setTimeout(() => {
          starContainer.style.display = "none";
          message.style.display = "block";
        }, 400);
  
      });
    });
  
  });