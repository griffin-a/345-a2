const modal = document.getElementsByClassName("w3-modal")[0];
const registerButton = document.getElementById("trigger-modal");
const closeButton = document.getElementById("close");
const submitButton = document.getElementById("form-submit");


registerButton.onclick = () => {
    openModal();
};

closeButton.onclick = () => {
    closeModal();
};

window.onclick = event => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const closeModal = () => {
    modal.style.display = "none";
}

const openModal = () => {
    console.log("Clicked register!");
    modal.style.display = "block";
}