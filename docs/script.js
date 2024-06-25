const hiddenElementsLeft = document.querySelectorAll(".hidden_left");
const hiddenElementsRight = document.querySelectorAll(".hidden_right");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

hiddenElementsLeft.forEach((element) => observer.observe(element));
hiddenElementsRight.forEach((element) => observer.observe(element));

const fdiff = document.querySelector('#fdiff');
const parts = document.querySelector('#parts');
const series = document.querySelector('#series');

var text = document.querySelector('#contribution_description')

fdiff.addEventListener('mouseover', () => {
    text.innerHTML = "Mathematics of Finite Differences";
    console.log("hovered");
});
fdiff.addEventListener('mouseout', () => {
    text.innerHTML = "";
});

parts.addEventListener('mouseover', () => {
    text.innerHTML = "Differentiation by Parts";
    console.log("hovered");
});
parts.addEventListener('mouseout', () => {
    text.innerHTML = "";
});

series.addEventListener('mouseover', () => {
    text.innerHTML = "Taylor Polynomials";
    console.log("hovered");
});
series.addEventListener('mouseout', () => {
    text.innerHTML = "";
});