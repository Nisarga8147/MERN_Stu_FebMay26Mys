
const container = document.getElementById("container");
//position
//beforebegin
//afterbegin
//beforeend
//afterend
document.getElementById("btn").addEventListener("click",function(){
    container.insertAdjacentHTML("beforeend","<p>Dynamically inserted</p>");
});