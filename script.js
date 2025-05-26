const optionMenu = document.querySelector(".select-menu"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () =>
    optionMenu.classList.toggle("active")
);

options.forEach((option) => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove("active");
    });
});

document.querySelectorAll(".nutri-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".nutri-btn").forEach((btn) => {
            btn.classList.remove("active");
        });
        btn.classList.add("active");
    });
});

const nutriBtnCocoa = document.querySelector(".nutri-btn-cocoa");
const nutriBtnMocha = document.querySelector(".nutri-btn-mocha");
const nutriBtnCaramel = document.querySelector(".nutri-btn-caramel");

nutriBtnCocoa.addEventListener("click", () => {
    document.querySelector(".nutri-img-1").src =
        "./assets/images/cocoa-nutri (4).png";
    document.querySelector(".nutri-img-2").src = "./assets/images/cocoa-nutri (3).png";
    document.querySelector(".nutri-img-3").src = "./assets/images/cocoa-nutri (2).png";
    document.querySelector(".nutri-img-4").src = "./assets/images/cocoa-nutri (1).png";
});

nutriBtnMocha.addEventListener("click", () => {
    document.querySelector(".nutri-img-1").src =
        "./assets/images/mocha-nutri (4).png";
    document.querySelector(".nutri-img-2").src = "./assets/images/mocha-nutri (3).png";
    document.querySelector(".nutri-img-3").src = "./assets/images/mocha-nutri (2).png";
    document.querySelector(".nutri-img-4").src = "./assets/images/mocha-nutri (1).png";
});

nutriBtnCaramel.addEventListener("click", () => {
    document.querySelector(".nutri-img-1").src =
        "./assets/images/caramel-nutri (4).png";
    document.querySelector(".nutri-img-2").src = "./assets/images/caramel-nutri (3).png";
    document.querySelector(".nutri-img-3").src = "./assets/images/caramel-nutri (2).png";
    document.querySelector(".nutri-img-4").src = "./assets/images/caramel-nutri (1).png";
});

const imgSwiper = new Swiper(".img-container", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".next-view-btn",
        prevEl: ".previous-view-btn",
    },
    grabCursor : true,
});


// const videoSwiper = new Swiper(".swiper-videos", {
//     slidesPerView: "auto",
//     spaceBetween: 16,
//     centeredSlides: false,
//     grabCursor: true,
//     navigation: {
//         nextEl: ".swiper-video-next",
//         prevEl: ".swiper-video-prev",
//     },
//     on: {
//         slideChangeTransitionEnd: () => {
//             const slides = document.querySelectorAll(".swiper-slide");
//             slides.forEach((slide) =>
//                 slide.classList.remove("swiper-slide-active")
//             );
//             const activeIndex = videoSwiper.activeIndex;
//             slides[activeIndex].classList.add("swiper-slide-active");
//         },
//     },
// });

const swiper = new Swiper(".videoSwiper", {
    slidesPerView: "auto",
    centeredSlides: false,
    // loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-video-next",
        prevEl: ".swiper-video-prev",
    },
    // on: {
    //     slideChangeTransitionEnd: () => {
    //         const slides = document.querySelectorAll(".swiper-slide");
    //         slides.forEach((slide) =>
    //             slide.classList.remove("swiper-slide-active")
    //         );
    //         const activeIndex = swiper.activeIndex;
    //         slides[activeIndex].classList.add("swiper-slide-active");
    //     },
    // },
});

const testimonialSwiper = new Swiper(".testimonials-slider", {
    slidesPerView: "auto",
    spaceBetween: 24,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            spaceBetween: 8,
        },
        768: {
            spaceBetween: 24,
        },
    }
});



const imgPreviewSlider = new Swiper('.img-preview-slider', {
    slidesPerView: 1,
    spaceBetween: 16,

    pagination: {
        el: '.img-swiper-pagination',
        clickable: true,
    },
    grabCursor: true,
});




document.querySelectorAll(".video-play-button").forEach((btn) => {
    btn.addEventListener("click", () => {
        if (!btn.classList.contains("active")) {
            const videoId = btn.getAttribute("data-id");
            document
                .querySelectorAll("video")
                .forEach((video) => video.pause());
            document.getElementById(videoId).play();
            document.querySelectorAll(".video-play-button").forEach((btn) => {
                btn.classList.remove("active");
            });
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
            const videoId = btn.getAttribute("data-id");
            document
                .querySelectorAll("video")
                .forEach((video) => video.pause());
        }

    });
});



document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const icon = item.querySelector("i");

        question.addEventListener("click", () => {
            // Close all answers first
            faqItems.forEach((otherItem) => {
                const otherAnswer = otherItem.querySelector(".faq-answer");
                const otherIcon = otherItem.querySelector("i");
                if (otherAnswer !== answer) {
                    otherAnswer.classList.remove("active");
                    otherIcon.classList.remove("fa-minus");
                    otherIcon.classList.add("fa-plus");
                }
            });

            // Toggle the current one
            answer.classList.toggle("active");
            icon.classList.toggle("fa-plus");
            icon.classList.toggle("fa-minus");
        });
    });
});


const onetimeRadio = document.getElementById("onetime");

onetimeRadio.addEventListener("change", function () {
    if (this.checked) {
        document.querySelector(".select-menu").style.display = "none";
        document.querySelector(".why-subscribe").style.display = "none";
    }
});

const subscribeRadio = document.getElementById("subscribe");
subscribeRadio.addEventListener("change", function () {
    if (this.checked) {
        document.querySelector(".select-menu").style.display = "block";
        document.querySelector(".why-subscribe").style.display = "block";
    }
});



const quantityPlus = document.querySelector(".plus-btn");
const quantityMinus = document.querySelector(".minus-btn");
const quantityInput = document.querySelector(".quantity");





quantityPlus.addEventListener("click", () => {
    let currentValue = parseInt(quantityInput.textContent) || 1;
    quantityInput.textContent = currentValue + 1;
});

quantityMinus.addEventListener("click", () => {
    let currentValue = parseInt(quantityInput.textContent) || 0;
    quantityInput.textContent = Math.max(1, currentValue - 1);
});



