function setupContactModal() {
  const openBtn = document.getElementById("contact-btn");
  const modal = document.getElementById("contact-modal");
  const closeBtn = document.getElementById("close-modal");
  const cancelBtn = document.getElementById("cancel-btn");
  const form = document.getElementById("contact-form");

  // OPEN
  openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  // CLOSE
  function closeModal() {
    modal.classList.add("hidden");
  }

  closeBtn.addEventListener("click", closeModal);
  cancelBtn.addEventListener("click", closeModal);

  // CLICK OUTSIDE TO CLOSE
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // FORM SUBMIT
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    alert("Message sent successfully! 🚀");

    form.reset();
    closeModal();
  });
}