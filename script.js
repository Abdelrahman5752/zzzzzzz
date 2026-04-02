// ===== Pupils follow mouse =====
const pupils = document.querySelectorAll(".pupil");

document.addEventListener("mousemove", (e) => {
  pupils.forEach((pupil) => {
    const rect = pupil.parentElement.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    pupil.style.transform = `translate(${x / 10}px, ${y / 10}px)`;
  });
});


// ===== Eyes open/close =====
function closeEyes() {
  document.querySelectorAll(".eye").forEach((eye) => {
    eye.classList.add("closed");
  });
}

function openEyes() {
  document.querySelectorAll(".eye").forEach((eye) => {
    eye.classList.remove("closed");
  });
}


// ===== Dark / Light Mode on Load =====
window.onload = function () {
  const mode = localStorage.getItem("mode");
  const btn = document.getElementById("modeBtn");

  if (mode === "dark") {
    document.body.classList.add("dark");
    btn.innerHTML = "☀️";
  } else {
    btn.innerHTML = "🌙";
  }
};


// ===== Toggle Dark Mode =====
function toggleMode() {
  document.body.classList.toggle("dark");

  const btn = document.getElementById("modeBtn");

  if (document.body.classList.contains("dark")) {
    btn.innerHTML = "☀️";
    localStorage.setItem("mode", "dark");
  } else {
    btn.innerHTML = "🌙";
    localStorage.setItem("mode", "light");
  }
}

