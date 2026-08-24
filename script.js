/* =========================================================
   ZING FIT STORE — WEBSITE JAVASCRIPT
   ========================================================= */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle) {
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
}


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* ================= PRODUCT FILTER ================= */

const categoryButtons = document.querySelectorAll(".category-btn");
const productCards = document.querySelectorAll(".product-card");

categoryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        /* Remove active class from all buttons */

        categoryButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        /* Add active class to clicked button */

        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        /* Show / hide products */

        productCards.forEach(function (card) {

            const category = card.getAttribute("data-category");

            if (filter === "all" || category === filter) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* ================= PRODUCT MODAL ================= */

function openProduct(title, image, price, description) {

    const modal = document.getElementById("productModal");

    const modalTitle = document.getElementById("modalTitle");
    const modalImage = document.getElementById("modalImage");
    const modalPrice = document.getElementById("modalPrice");
    const modalDescription = document.getElementById("modalDescription");

    /* Add product information */

    modalTitle.textContent = title;

    modalImage.src = image;

    modalImage.alt = title;

    modalPrice.textContent = price;

    modalDescription.textContent = description;

    /* Open modal */

    modal.classList.add("active");

    /* Prevent background scrolling */

    document.body.style.overflow = "hidden";
}


/* ================= CLOSE PRODUCT ================= */

function closeProduct() {

    const modal = document.getElementById("productModal");

    modal.classList.remove("active");

    /* Enable background scrolling */

    document.body.style.overflow = "";
}


/* ================= ESC KEY ================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeProduct();

    }

});


/* ================= CONTACT FORM ================= */

function sendMessage(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();


    if (!name || !email || !subject || !message) {

        alert("Please fill in all fields.");

        return;

    }


    /*
       Temporary contact form.

       Later we can connect this form
       with WhatsApp, EmailJS or a proper
       contact form service.
    */

    const whatsappNumber = "+923472164";

    const whatsappMessage =
        "Hello Zing Fit Store!" +
        "\n\nName: " + name +
        "\nEmail: " + email +
        "\nSubject: " + subject +
        "\n\nMessage:\n" + message;


    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(whatsappMessage);


    window.open(whatsappURL, "_blank");

}


/* ================= IMAGE ERROR HANDLING ================= */

const productImages = document.querySelectorAll(".product-image img");

productImages.forEach(function (image) {

    image.addEventListener("error", function () {

        image.style.display = "none";

        image.parentElement.classList.add("image-error");

    });

});


/* ================= HEADER SCROLL EFFECT ================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(2, 6, 9, 0.97)";

    } else {

        navbar.style.background = "rgba(3, 7, 10, 0.92)";

    }

});


/* ================= SMOOTH PRODUCT VIEW ================= */

document.querySelectorAll(".view-product").forEach(function (button) {

    button.addEventListener("click", function () {

        setTimeout(function () {

            const modal = document.getElementById("productModal");

            if (modal.classList.contains("active")) {

                modal.scrollTop = 0;

            }

        }, 50);

    });

});