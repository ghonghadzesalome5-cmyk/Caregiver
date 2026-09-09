document.addEventListener("DOMContentLoaded", function () {

    function showSection(sectionId) {

        const section = document.getElementById(sectionId);

        if (!section) return;

        // ფორმის ჩვენება
        if (sectionId === "request" || sectionId === "caregiver") {
            section.classList.add("show-form");
        }

        // შესაბამის სექციაზე გადასვლა
        section.scrollIntoView({
            behavior: "smooth"
        });
    }


    // მჭირდება მომვლელი
    const requestBtn = document.getElementById("requestBtn");

    if (requestBtn) {
        requestBtn.addEventListener("click", function () {
            showSection("request");
        });
    }


    // ვარ მომვლელი
    const caregiverBtn = document.getElementById("caregiverBtn");

    if (caregiverBtn) {
        caregiverBtn.addEventListener("click", function () {
            showSection("caregiver");
        });
    }


    // ბარათების ღილაკები
    const cardButtons = document.querySelectorAll("[data-target]");

    cardButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const targetId = button.getAttribute("data-target");

            showSection(targetId);

        });

    });


    // მოგვწერეთ
    const chatBtn = document.querySelector(".chat-btn");

    if (chatBtn) {

        chatBtn.addEventListener("click", function () {

            showSection("contact");

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
