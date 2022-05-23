const modal = document.getElementsByClassName("modal")[0];
const registerButton = document.getElementById("trigger-modal");
const closeButton = document.getElementsByClassName("close")[0];

console.log(registerButton);

registerButton.onclick = () => {
    console.log("Clicked register!");
    modal.style.display = "block";
};

closeButton.onclick = () => {
    modal.style.display = "none";
};

window.onclick = event => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}