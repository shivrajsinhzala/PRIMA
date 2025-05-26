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

const nutriBtnCacao = document.querySelector(".nutri-btn-cacao");
const nutriBtnMocha = document.querySelector(".nutri-btn-mocha");
const nutriBtnCaramel = document.querySelector(".nutri-btn-caramel");

nutriBtnCacao.addEventListener("click", () => {
    document.querySelector(".nutri-img-1").src =
        "./assets/images/cacao-nutri (4).png";
    document.querySelector(".nutri-img-2").src =
        "./assets/images/cacao-nutri (3).png";
    document.querySelector(".nutri-img-3").src =
        "./assets/images/cacao-nutri (2).png";
    document.querySelector(".nutri-img-4").src =
        "./assets/images/cacao-nutri (1).png";
});

nutriBtnMocha.addEventListener("click", () => {
    document.querySelector(".nutri-img-1").src =
        "./assets/images/mocha-nutri (4).png";
    document.querySelector(".nutri-img-2").src =
        "./assets/images/mocha-nutri (3).png";
    document.querySelector(".nutri-img-3").src =
        "./assets/images/mocha-nutri (2).png";
    document.querySelector(".nutri-img-4").src =
        "./assets/images/mocha-nutri (1).png";
});

nutriBtnCaramel.addEventListener("click", () => {
    document.querySelector(".nutri-img-1").src =
        "./assets/images/caramel-nutri (4).png";
    document.querySelector(".nutri-img-2").src =
        "./assets/images/caramel-nutri (3).png";
    document.querySelector(".nutri-img-3").src =
        "./assets/images/caramel-nutri (2).png";
    document.querySelector(".nutri-img-4").src =
        "./assets/images/caramel-nutri (1).png";
});

const imgSwiper = new Swiper(".img-container", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".next-view-btn",
        prevEl: ".previous-view-btn",
    },
    grabCursor: true,
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
    loop: true,
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

let testimonialSwiper = new Swiper(".testimonials-slider", {
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
    },
});

let imgPreviewSlider = new Swiper(".img-preview-slider", {
    slidesPerView: 1,
    spaceBetween: 16,

    pagination: {
        el: ".img-swiper-pagination",
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

        document.querySelector(
            ".product-info .product-price .price"
        ).textContent = "$27.93";

        document.querySelector(
            ".product-info .product-price .old-price"
        ).textContent = "";

        updatePrice();
    }
});

const subscribeRadio = document.getElementById("subscribe");
subscribeRadio.addEventListener("change", function () {
    if (this.checked) {
        document.querySelector(".select-menu").style.display = "block";
        document.querySelector(".why-subscribe").style.display = "block";

        document.querySelector(
            ".product-info .product-price .price"
        ).textContent = "$23.74";

        document.querySelector(
            ".product-info .product-price .old-price"
        ).textContent = "$27.93";

        updatePrice();
    }
});

const quantityPlus = document.querySelector(".plus-btn");
const quantityMinus = document.querySelector(".minus-btn");
const quantityInput = document.querySelector(".quantity");

quantityPlus.addEventListener("click", () => {
    let currentValue = parseInt(quantityInput.textContent) || 1;
    quantityInput.textContent = currentValue + 1;
    updatePrice();
});

quantityMinus.addEventListener("click", () => {
    let currentValue = parseInt(quantityInput.textContent) || 0;
    quantityInput.textContent = Math.max(1, currentValue - 1);
    updatePrice();
});

mediumZoom("#main-img");

const subImagecontainer = document.querySelector(".sub-img");
const subImages = document.querySelectorAll(".sub-img img");
const mainImageContainer = document.querySelector(".main-img");
const mainImage = document.getElementById("main-img");
const imgPreview = document.querySelector(".img-preview");

document.getElementById("mocha").addEventListener("change", () => {
    if (document.getElementById("mocha").checked) {
        // console.log("Mocha selected");

        updatePrice();

        document.querySelector(".product-title").textContent =
            "Ancestral Protein Bar - Mocha";
        const mainImage = document.querySelector(".main-img img");
        const subImageContainer = document.querySelector(".sub-img");

        // Update main image
        mainImage.src = "./assets/images/mocha-main-img.png";

        // Clear old sub-images
        subImageContainer.innerHTML = "";

        // List of sub-image sources
        const subImages = [
            "./assets/images/mocha-main-img.png",
            "./assets/images/mocha-sub-img-1.png",
            "./assets/images/mocha-sub-img-2.png",
            "./assets/images/mocha-sub-img-3.png",
            "./assets/images/mocha-sub-img-4.png",
        ];

        // Add new sub-images
        subImages.forEach((src) => {
            const img = document.createElement("img");
            img.src = src;
            img.alt = "";
            subImageContainer.appendChild(img);
        });

        document.querySelector(".pack-img-1").src =
            "./assets/images/mocha-1-pack.png";
        document.querySelector(".pack-img-2").src =
            "./assets/images/mocha-2-pack.png";
        document.querySelector(".pack-img-4").src =
            "./assets/images/mocha-4-pack.png";
        document.querySelector(".pack-img-8").src =
            "./assets/images/mocha-8-pack.png";


                
        imgPreviewSlider.destroy(true, true);

        // Rebuild the slider with new sub-images
        const swiperWrapper = document.querySelector(
            ".img-preview-slider .swiper-wrapper"
        );
        swiperWrapper.innerHTML = "";
        subImages.forEach((src) => {
            const slideDiv = document.createElement("div");
            slideDiv.className = "swiper-slide";
            const img = document.createElement("img");
            img.src = src;
            slideDiv.appendChild(img);
            swiperWrapper.appendChild(slideDiv);
        });

        // Reinitialize the Swiper
        imgPreviewSlider = new Swiper(".img-preview-slider", {
            slidesPerView: 1,
            spaceBetween: 16,
            pagination: {
                el: ".img-swiper-pagination",
                clickable: true,
            },
            grabCursor: true,
        });
    }
});

document.getElementById("salted-caramel").addEventListener("change", () => {
    if (document.getElementById("salted-caramel").checked) {
        // console.log("Salted Caramel selected");

        updatePrice();

        document.querySelector(".product-title").textContent =
            "Ancestral Protein Bar - Salted Caramel";
        const mainImage = document.querySelector(".main-img img");
        const subImageContainer = document.querySelector(".sub-img");

        // Update main image
        mainImage.src = "./assets/images/caramel-main-img.png";

        // Clear old sub-images
        subImageContainer.innerHTML = "";

        // List of sub-image sources
        const subImages = [
            "./assets/images/caramel-main-img.png",
            "./assets/images/caramel-sub-img-1.png",
            "./assets/images/caramel-sub-img-2.png",
            "./assets/images/caramel-sub-img-3.png",
            "./assets/images/caramel-sub-img-4.png",
        ];

        // Add new sub-images
        subImages.forEach((src) => {
            const img = document.createElement("img");
            img.src = src;
            img.alt = "";
            subImageContainer.appendChild(img);
        });

        document.querySelector(".pack-img-1").src =
            "./assets/images/caramel-1-pack.png";
        document.querySelector(".pack-img-2").src =
            "./assets/images/caramel-2-pack.png";
        document.querySelector(".pack-img-4").src =
            "./assets/images/caramel-4-pack.png";
        document.querySelector(".pack-img-8").src =
            "./assets/images/caramel-8-pack.png";


                
        imgPreviewSlider.destroy(true, true);

        // Rebuild the slider with new sub-images
        const swiperWrapper = document.querySelector(
            ".img-preview-slider .swiper-wrapper"
        );
        swiperWrapper.innerHTML = "";
        subImages.forEach((src) => {
            const slideDiv = document.createElement("div");
            slideDiv.className = "swiper-slide";
            const img = document.createElement("img");
            img.src = src;
            slideDiv.appendChild(img);
            swiperWrapper.appendChild(slideDiv);
        });

        // Reinitialize the Swiper
        imgPreviewSlider = new Swiper(".img-preview-slider", {
            slidesPerView: 1,
            spaceBetween: 16,
            pagination: {
                el: ".img-swiper-pagination",
                clickable: true,
            },
            grabCursor: true,
        });
    }
});

document.getElementById("variety-pack").addEventListener("change", () => {
    if (document.getElementById("variety-pack").checked) {
        // console.log("Variety Pack selected");

        updatePrice();
    

        document.querySelector(".product-title").textContent =
            "Ancestral Protein Bar - Variety Pack";
        const mainImage = document.querySelector(".main-img img");
        const subImageContainer = document.querySelector(".sub-img");

        // Update main image
        mainImage.src = "./assets/images/variety-pack-main-img.png";

        // Clear old sub-images
        subImageContainer.innerHTML = "";

        // List of sub-image sources
        const subImages = [
            "./assets/images/variety-pack-main-img.png",
            "./assets/images/variety-pack-sub-img-1.png",
            "./assets/images/variety-pack-sub-img-2.png",
            "./assets/images/variety-pack-sub-img-3.png",
            "./assets/images/variety-pack-sub-img-4.png",
            "./assets/images/variety-pack-sub-img-5.png",
            "./assets/images/variety-pack-sub-img-6.png",
        ];

        // Add new sub-images
        subImages.forEach((src) => {
            const img = document.createElement("img");
            img.src = src;
            img.alt = "";
            subImageContainer.appendChild(img);
        });

        document.querySelector(".pack-img-1").src =
            "./assets/images/variety-1-pack.png";
        document.querySelector(".pack-img-2").src =
            "./assets/images/variety-2-pack.png";
        document.querySelector(".pack-img-4").src =
            "./assets/images/variety-4-pack.png";
        document.querySelector(".pack-img-8").src =
            "./assets/images/variety-8-pack.png";



                
        imgPreviewSlider.destroy(true, true);

        // Rebuild the slider with new sub-images
        const swiperWrapper = document.querySelector(
            ".img-preview-slider .swiper-wrapper"
        );
        swiperWrapper.innerHTML = "";
        subImages.forEach((src) => {
            const slideDiv = document.createElement("div");
            slideDiv.className = "swiper-slide";
            const img = document.createElement("img");
            img.src = src;
            slideDiv.appendChild(img);
            swiperWrapper.appendChild(slideDiv);
        });

        // Reinitialize the Swiper
        imgPreviewSlider = new Swiper(".img-preview-slider", {
            slidesPerView: 1,
            spaceBetween: 16,
            pagination: {
                el: ".img-swiper-pagination",
                clickable: true,
            },
            grabCursor: true,
        });
    }
});

document.getElementById("cacao").addEventListener("change", () => {
    if (document.getElementById("cacao").checked) {
        // console.log("Variety Pack selected");
        updatePrice();
        const mainImage = document.querySelector(".main-img img");
        const subImageContainer = document.querySelector(".sub-img");

        // Update main image
        mainImage.src = "./assets/images/cacao-main-img.png";

        // Clear old sub-images
        subImageContainer.innerHTML = "";

        // List of sub-image sources
        const subImages = [
            "./assets/images/cacao-main-img.png",
            "./assets/images/cacao-sub-img-1.png",
            "./assets/images/cacao-sub-img-2.png",
            "./assets/images/cacao-sub-img-3.png",
            "./assets/images/cacao-sub-img-4.png",
        ];

        // Add new sub-images
        subImages.forEach((src) => {
            const img = document.createElement("img");
            img.src = src;
            img.alt = "";
            subImageContainer.appendChild(img);
        });

        document.querySelector(".product-title").textContent =
            "Ancestral Protein Bar - Cacao";

        document.querySelector(".pack-img-1").src =
            "./assets/images/cacao-1-pack.png";
        document.querySelector(".pack-img-2").src =
            "./assets/images/cacao-2-pack.png";
        document.querySelector(".pack-img-4").src =
            "./assets/images/cacao-4-pack.png";
        document.querySelector(".pack-img-8").src =
            "./assets/images/cacao-8-pack.png";


                
        imgPreviewSlider.destroy(true, true);

        // Rebuild the slider with new sub-images
        const swiperWrapper = document.querySelector(
            ".img-preview-slider .swiper-wrapper"
        );
        swiperWrapper.innerHTML = "";
        subImages.forEach((src) => {
            const slideDiv = document.createElement("div");
            slideDiv.className = "swiper-slide";
            const img = document.createElement("img");
            img.src = src;
            slideDiv.appendChild(img);
            swiperWrapper.appendChild(slideDiv);
        });

        // Reinitialize the Swiper
        imgPreviewSlider = new Swiper(".img-preview-slider", {
            slidesPerView: 1,
            spaceBetween: 16,
            pagination: {
                el: ".img-swiper-pagination",
                clickable: true,
            },
            grabCursor: true,
        });
    }
});

document.getElementById("8-pack").addEventListener("change", () => {
    if (document.getElementById("8-pack").checked) {
        updatePrice();
        document.getElementById("main-img").src =
            document.querySelector(".pack-img-8").src;
        document.querySelector(
            ".img-preview-slider .main-img .swiper-slide-active img"
        ).src = document.querySelector(".pack-img-8").src;
        imgPreviewSlider.slideTo(0); // Reset to first slide
    }
});

document.getElementById("4-pack").addEventListener("change", () => {
    if (document.getElementById("4-pack").checked) {
        updatePrice();
        document.getElementById("main-img").src =
            document.querySelector(".pack-img-4").src;
        document.querySelector(
            ".img-preview-slider .main-img .swiper-slide-active img"
        ).src = document.querySelector(".pack-img-4").src;
        imgPreviewSlider.slideTo(0); // Reset to first slide
    }
});

document.getElementById("2-pack").addEventListener("change", () => {
    if (document.getElementById("2-pack").checked) {
        updatePrice();
        document.getElementById("main-img").src =
            document.querySelector(".pack-img-2").src;
        document.querySelector(
            ".img-preview-slider .main-img .swiper-slide-active img"
        ).src = document.querySelector(".pack-img-2").src;
        imgPreviewSlider.slideTo(0); // Reset to first slide
    }
});

document.getElementById("1-pack").addEventListener("change", () => {
    if (document.getElementById("1-pack").checked) {
        updatePrice();
        document.getElementById("main-img").src =
            document.querySelector(".pack-img-1").src;
        document.querySelector(".img-preview-slider .main-img .swiper-slide-active img").src =
            document.querySelector(".pack-img-1").src;
        imgPreviewSlider.slideTo(0); // Reset to first slide
    }
});

document.querySelector(".sub-img").addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        document.getElementById("main-img").src = e.target.src;
    }
});

function updatePrice() {
    const selectedPack = document.querySelector(
        'input[name="quantity"]:checked'
    );

    const frequencyOption = document.querySelector(
        'input[name="frequency"]:checked'
    );

    const quantity = document.querySelector(".quantity").textContent || 1;

    if (selectedPack && frequencyOption && quantity) {
        // console.log("Selected Pack:", selectedPack.value);
        // console.log("Frequency Option:", frequencyOption.value);

        let totalPrice = 0; // Default price for 8-pack
        let perBarPrice = 3.99; // Default price per bar for 8-pack
        let packDiscount = 0;
        let piecePerPack = 7 * quantity;

        let subscriptionDiscount = 0.15;
        if (frequencyOption.value === "subscribed") {
            if (selectedPack.value === "8") {
                packDiscount = 0.15;
                totalPrice = 8 * piecePerPack * perBarPrice;

                totalPrice = totalPrice - totalPrice * packDiscount;

                totalPrice = totalPrice - totalPrice * subscriptionDiscount;
            } else if (selectedPack.value === "4") {
                packDiscount = 0.1;
                totalPrice = 4 * piecePerPack * perBarPrice;

                totalPrice = totalPrice - totalPrice * packDiscount;

                totalPrice = totalPrice - totalPrice * subscriptionDiscount;
            } else if (selectedPack.value === "2") {
                packDiscount = 0.05;
                totalPrice = 2 * piecePerPack * perBarPrice;

                totalPrice = totalPrice - totalPrice * packDiscount;

                totalPrice = totalPrice - totalPrice * subscriptionDiscount;
            } else if (selectedPack.value === "1") {
                totalPrice = piecePerPack * perBarPrice;

                totalPrice = totalPrice - totalPrice * subscriptionDiscount;
            }
        } else if (frequencyOption.value === "onetime") {
            if (selectedPack.value === "8") {
                packDiscount = 0.15;
                totalPrice = 8 * piecePerPack * perBarPrice;
                totalPrice = totalPrice - totalPrice * packDiscount;
            } else if (selectedPack.value === "4") {
                packDiscount = 0.1;
                totalPrice = 4 * piecePerPack * perBarPrice;
                totalPrice = totalPrice - totalPrice * packDiscount;
            } else if (selectedPack.value === "2") {
                packDiscount = 0.05;
                totalPrice = 2 * piecePerPack * perBarPrice;
                totalPrice = totalPrice - totalPrice * packDiscount;
            } else if (selectedPack.value === "1") {
                totalPrice = piecePerPack * perBarPrice;
            }
        }

        document.querySelector(
            ".add-to-cart-btn .price"
        ).textContent = `$${totalPrice.toFixed(2)}`;
    }
}

updatePrice();
