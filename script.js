// تركيز على قسم
function focusSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// الشهادة
function openCert() {
  document.getElementById("popup").style.display = "block";
}

function closeCert() {
  document.getElementById("popup").style.display = "none";
}