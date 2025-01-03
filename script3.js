document.addEventListener("DOMContentLoaded", function() {
  function learnMore() {
    alert("Drexstore hadir untuk memberikan pengalaman belanja yang nyaman dan modern!");
  }

  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    const messageBox = document.createElement("div");
    messageBox.style.backgroundColor = "#007BFF";
    messageBox.style.color = "white";
    messageBox.style.padding = "15px";
    messageBox.style.marginTop = "20px";
    messageBox.style.textAlign = "center";
    messageBox.textContent = "Terima kasih, " + name + "! Pesan Anda telah dikirim.";
    document.body.appendChild(messageBox); 

  });

  const learnMoreButton = document.querySelector("button");
  if (learnMoreButton) {
    learnMoreButton.addEventListener("click", learnMore);
  }
});
