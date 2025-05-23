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
    document.querySelector(".swiper-cocoa").style.display = "block";
    document.querySelector(".swiper-mocha").style.display = "none";
    document.querySelector(".swiper-caramel").style.display = "none";
});

nutriBtnMocha.addEventListener("click", () => {
    document.querySelector(".swiper-cocoa").style.display = "none";
    document.querySelector(".swiper-mocha").style.display = "block";
    document.querySelector(".swiper-caramel").style.display = "none";
});

nutriBtnCaramel.addEventListener("click", () => {
    document.querySelector(".swiper-cocoa").style.display = "none";
    document.querySelector(".swiper-mocha").style.display = "none";
    document.querySelector(".swiper-caramel").style.display = "block";
});

const imgSwiper = new Swiper(".img-container", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".next-view-btn",
        prevEl: ".previous-view-btn",
    },
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
    spaceBetween: 16,
    centeredSlides: false,
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
