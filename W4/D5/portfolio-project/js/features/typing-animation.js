function typingEffect() {
  const text = "Full-Stack developer | MERN enthusiast | Competitive Programmer";
  const element = document.getElementById("typing-text");

  let i = 0;

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }

  type();
}