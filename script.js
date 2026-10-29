const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

document.querySelectorAll("#navLinks a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Add your LinkedIn profile URL here before publishing.
const linkedinUrl = "";
const linkedinLink = document.getElementById("linkedinLink");
if (linkedinUrl) {
  linkedinLink.href = linkedinUrl;
  linkedinLink.target = "_blank";
  linkedinLink.rel = "noreferrer";
} else {
  linkedinLink.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Please add your LinkedIn profile URL in script.js before publishing.");
  });
}
