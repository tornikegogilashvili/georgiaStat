// const menuNtm = document.querySelector("")


const dots = document.querySelectorAll(".circle_div_dot");
const slides = document.querySelectorAll(".img-slide");
const five_div = document.querySelectorAll(".count_div");


let sliderNav = function(X){
    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    five_div.forEach((five_divs) => {
        five_divs.classList.remove("active");
    });

    dots[X].classList.add("active");
    slides[X].classList.add("active");
    five_div[X].classList.add("active");
}
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            sliderNav(i)
        })
        console.log(dot);
    })


