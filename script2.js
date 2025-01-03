// Menangani pengiriman formulir login
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah reload halaman

        // Ambil nilai input
        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");
        const errorMessage = document.getElementById("errorMessage");

        if (usernameInput && passwordInput) {
            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            // Contoh validasi sederhana (dengan username dan password statis)
            if (username === "admin" && password === "1234") {
                alert("Login berhasil!");
                window.location.href = "layout-apl-penjualan-barang-uas.html"; // Redirect ke halaman lain
            } else {
                if (errorMessage) {
                    errorMessage.innerText = "Username atau password salah!";
                }
            }
        } else {
            console.error("Elemen input username atau password tidak ditemukan.");
        }
    });
} else {
    console.error("Form login tidak ditemukan.");
}
