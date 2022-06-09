const modal = document.getElementsByClassName("modal")[0];
const registerButton = document.getElementById("trigger-modal");
const closeButton = document.getElementsByClassName("close")[0];
const submitButton = document.getElementById("form-submit");


registerButton.onclick = () => {
    openModal();
};

closeButton.onclick = () => {
    closeModal();
};

submitButton.onclick = () => {
    closeModal();
}

window.onclick = event => {
    if (event.target == modal) {
        registerButton.className = "inactive";
        modal.style.display = "none";
    }
}

const closeModal = () => {
    registerButton.className = "inactive";
    modal.style.display = "none";
}

const openModal = () => {
    console.log("Clicked register!");
    registerButton.className = "active";
    modal.style.display = "block";
}