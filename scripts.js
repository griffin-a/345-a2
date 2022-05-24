const modal = document.getElementsByClassName("modal")[0];
const registerButton = document.getElementById("trigger-modal");
const closeButton = document.getElementsByClassName("close")[0];

console.log(registerButton);

registerButton.onclick = () => {
    console.log("Clicked register!");
    registerButton.className = "active";
    modal.style.display = "block";
};

closeButton.onclick = () => {
    registerButton.className = "inactive";
    modal.style.display = "none";
};

window.onclick = event => {
    if (event.target == modal) {
        registerButton.className = "inactive";
        modal.style.display = "none";
    }
}