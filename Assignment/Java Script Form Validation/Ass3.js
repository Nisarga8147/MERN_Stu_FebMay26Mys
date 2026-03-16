//Multi-Section Feedback Analyzer
const feedbackForm = document.getElementById("feedbackForm");
const feedbackName = document.getElementById("feedbackName");
const feedbackEmail = document.getElementById("feedbackEmail");
const feedbackText = document.getElementById("feedbackText");
const feedback = document.getElementById("feedback");
const deleteBtn = document.getElementById("deleteBtn"); 
const message = document.getElementById("message");
const card = document.querySelector(".card");
const addFormBtn = document.getElementById("addFormBtn");
const formContainer = document.getElementById("formContainer");

feedbackForm.addEventListener("submit",function(event){
    event.preventDefault();
    console.log("feedback ",feedback.value);
    const email = feedbackEmail.value.trim();

    if(!email){
        message.textContent = "Email is required";
        message.style.color = "red";
        feedbackEmail.focus();
        return;
    }
    if(!email.includes('@') || !email.includes('.')){
        message.textContent = "Please enter valid email id";
        message.style.color = "red";
        feedbackEmail.focus();
        return;
    }
    
    const text = feedbackText.value;
    if(text.length < 20){
        message.textContent = "Please enter at least 20 characters in a feedback.";
        message.style.color = "red";
    }
    else{
        message.textContent = " ";
    } 
});
let formCount = 1;
addFormBtn.addEventListener("click", function () {
    formCount++;
    const newCard = document.querySelector(".card").cloneNode(true);
    // change form title
    newCard.firstChild.textContent = "Feedback Form " + formCount;
    // clear inputs
    newCard.querySelector("#feedbackName").value = "";
    newCard.querySelector("#feedbackEmail").value = "";
    newCard.querySelector("#feedbackText").value = "";
    newCard.querySelector("#message").textContent = "";
    formContainer.appendChild(newCard);
});
document.getElementById("formContainer").addEventListener("click", function(event){
    if(event.target.id === "deleteBtn"){
        const card = event.target.closest(".card");
        card.remove();
    }
});
event.target.closest(".card").remove();
feedbackEmail.addEventListener("input",() => message.textContent = "");