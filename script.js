// Get elements
const menuIcon = document.getElementById('menu-icon');
const nav = document.querySelector('.nav');

// Function to toggle navigation visibility
function toggleNav() {
    if (window.innerWidth <= 768) {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    }
}

// Initial setup based on screen size
function checkScreenSize() {
    if (window.innerWidth > 768) {
        nav.style.display = 'flex'; // Show nav on larger screens
    } else {
        nav.style.display = 'none';  // Hide nav on small screens
    }
}

// Event listeners
menuIcon.addEventListener('click', toggleNav);
window.addEventListener('resize', checkScreenSize);

// Run on load
checkScreenSize();

// Initialize EmailJS
(function() {
  emailjs.init("DwgpAQTF5F8c6a-EO"); // Replace with your actual user ID from EmailJS
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Collect form data
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Send form data using EmailJS
  emailjs.send("service_4f3lw7m", "portfolio_3yezb2b", {
    fullName: fullName,
    email: email,
    phone: phone,
    subject: subject,
    message: message,
  }).then(function(response) {
    alert("Message sent successfully!");
  }, function(error) {
    alert("Failed to send message. Please try again.");
  });
});
