//edit button func
let edit = document.querySelector('.profile__edit-button');
let modal = document.querySelector('.popup');

//close buttom func
let closer = document.querySelector('.popup__button-cross');

//profile username func
let username = document.querySelector('.profile__user');
let job = document.querySelector('.profile__job-title');


let userInput = document.querySelector('.popup__input_data_username');
let jobInput = document.querySelector('.popup__input_data_job');


let saveButton = document.querySelector('.popup__description');

edit.addEventListener("click",() => {
    modal.classList.add("popup_opened");
    userInput.value = username.textContent;
    jobInput.value = job.textContent;
});

closer.addEventListener("click", closePopup);

saveButton.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(evt) {
    evt.preventDefault();
    username.textContent = userInput.value;
    job.textContent = jobInput.value;
    closePopup();
}

function closePopup() {
    modal.classList.remove("popup_opened");
}
