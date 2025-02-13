function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.classList.add("heart");
  document.body.appendChild(heart);
  
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  
  setTimeout(() => {
      heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);

function showMessage() {
  document.getElementById("hiddenMessage").style.display = "block";
}