const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("quoteForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const job = document.getElementById("job").value.trim();

  const subject = encodeURIComponent("Welding Quote Request - " + name);
  const body = encodeURIComponent(
    "Name: " + name + "\n" +
    "Phone: " + (phone || "Not provided") + "\n\n" +
    "Job description:\n" + job
  );

  window.location.href =
    "mailto:careyjames133@gmail.com?subject=" + subject + "&body=" + body;
});
