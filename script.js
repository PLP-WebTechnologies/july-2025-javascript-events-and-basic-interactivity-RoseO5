// ===============================
// FORM VALIDATION (no reload)
// ===============================
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent page refresh

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("formMessage");

    // Basic validation rules
    if (username.length < 3) {
        message.textContent = "❌ Username must be at least 3 characters.";
        message.style.color = "red";
        return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        message.textContent = "❌ Please enter a valid email address.";
        message.style.color = "red";
        return;
    }

    if (password.length < 6) {
        message.textContent = "❌ Password must be at least 6 characters.";
        message.style.color = "red";
        return;
    }

    // If all validation passes
    message.textContent = "✅ Form submitted successfully!";
    message.style.color = "green";
});

// ===============================
// INTERACTIVE COUNTER FEATURE
// ===============================
let counter = 0;

document.getElementById("increaseBtn").addEventListener("click", function() {
    counter++;
    document.getElementById("counterValue").textContent = counter;
});

document.getElementById("decreaseBtn").addEventListener("click", function() {
    counter--;
    document.getElementById("counterValue").textContent = counter;
});

document.getElementById("resetBtn").addEventListener("click", function() {
    counter = 0;
    document.getElementById("counterValue").textContent = counter;
});

// ===============================
// TOGGLE MESSAGE FEATURE
// ===============================
document.getElementById("toggleBtn").addEventListener("click", function() {
    const message = document.getElementById("toggleMessage");
    message.style.display = (message.style.display === "none") ? "block" : "none";
});
