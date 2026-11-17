// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );
});

// Close mobile navigation after clicking a link
document.querySelectorAll(".navigation a").forEach((link) => {
    link.addEventListener("click", () => {
        navigation.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
    });
});

// Automatically update footer year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Gracefully handle any image that fails to load (keeps layout intact)
document.querySelectorAll("img").forEach((img) => {
    const markMissing = () => img.classList.add("img-missing");

    img.addEventListener("error", markMissing);

    if (img.complete && img.naturalWidth === 0) {
        markMissing();
    }
});
