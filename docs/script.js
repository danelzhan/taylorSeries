const hiddenElementsLeft = document.querySelectorAll(".hidden_left");
const hiddenElementsRight = document.querySelectorAll(".hidden_right");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenElementsLeft.forEach((element) => observer.observe(element));
hiddenElementsRight.forEach((element) => observer.observe(element));