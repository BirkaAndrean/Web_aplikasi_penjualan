// Menambahkan animasi pada header saat halaman di-scroll
document.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }
});

// Animasi untuk tombol "Mulai Sekarang"
const ctaButton = document.querySelector(".cta-button");
if (ctaButton) {
    ctaButton.addEventListener("mouseover", () => {
        ctaButton.classList.add("hover-effect");
    });
    ctaButton.addEventListener("mouseout", () => {
        ctaButton.classList.remove("hover-effect");
    });
}

// Scroll halus untuk navigasi
const navLinks = document.querySelectorAll("nav ul li a");
if (navLinks.length > 0) {
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Mencegah perilaku default
            const targetId = event.target.getAttribute("href")?.replace("#", "");
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}

// Popup pesan sambutan
window.addEventListener("load", () => {
    setTimeout(() => {
        alert("Selamat Datang di DrexONE Store! Nikmati pengalaman belanja yang mudah dan cepat.");
    }, 1000);
});
