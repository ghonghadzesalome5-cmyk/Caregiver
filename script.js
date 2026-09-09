document.addEventListener("DOMContentLoaded", function () {

    // მთავარი ღილაკი — მჭირდება მომვლელი
    const requestBtn = document.getElementById("requestBtn");

    if (requestBtn) {
        requestBtn.addEventListener("click", function () {
            document.getElementById("request").scrollIntoView({
                behavior: "smooth"
            });
        });
    }


    // მთავარი ღილაკი — ვარ მომვლელი
    const caregiverBtn = document.getElementById("caregiverBtn");

    if (caregiverBtn) {
        caregiverBtn.addEventListener("click", function () {
            document.getElementById("caregiver").scrollIntoView({
                behavior: "smooth"
            });
        });
    }


    // ბარათების ღილაკები
    const cardButtons = document.querySelectorAll("[data-target]");

    cardButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const targetId = button.getAttribute("data-target");
            const target = document.getElementById(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });


    // "მოგვწერეთ" ღილაკი
    const chatBtn = document.querySelector(".chat-btn");

    if (chatBtn) {
        chatBtn.addEventListener("click", function () {

            document.getElementById("contact").scrollIntoView({
                behavior: "smooth"
            });

        });
    }


    // ფორმების გაგზავნა
    const forms = document.querySelectorAll(".care-form");

    forms.forEach(function (form) {

        form.addEventListener("submit", function () {

            const button = form.querySelector("button[type='submit']");

            if (button) {
                button.textContent = "იგზავნება...";
                button.disabled = true;
            }

        });

    });

});
