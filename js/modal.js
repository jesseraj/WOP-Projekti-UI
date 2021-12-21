const modal = document.getElementById("Modali");

const btn = document.getElementById("myBtn");

const span = document.getElementsByClassName("close")[0];

// Avaa modalin kun painetaan
btn.onclick = function() {
modal.style.display = "block";
}

// Sulkee modalin kun painetaan X
span.onclick = function() {
modal.style.display = "none";
}

// Sulkee modalin kun painetaan sen ulkopuolelta
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}
