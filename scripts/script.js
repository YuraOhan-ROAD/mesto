//edit button func
let edit = document.querySelector('.profile__edit-button');
let backgroundModal = document.querySelector('.form__opened-background');
let modal = document.getElementsByClassName('form')[0];

//close buttom func
let closer = document.querySelector('.form__button-cross');

//profile username func
let username = document.querySelector('.profile__user');
let job = document.querySelector('.profile__job-title');

// 
let userInput = document.getElementsByClassName('form__input')[0];
let jobInput = document.getElementsByClassName('form__input')[1];

//
let saveButton = document.querySelector('.form__button-submit');

edit.addEventListener("click",() => {
    console.log('username - ', username.innerHTML);
    console.log('job - ', job.innerHTML);
    backgroundModal.style.display = 'block';
    modal.style.display = 'block';
    userInput.value = username.innerHTML;
    jobInput.value = job.innerHTML;
});

closer.addEventListener("click", closeModal);

saveButton.addEventListener("click", saveChange);

function saveChange() {
    if(userInput.value.length > 20){
        return alert('количество букв не должно превышать 20 символов')
    }
    if(jobInput.value.length > 35){
        return alert('количество букв не должно превышать 35 символов')
    }
    console.log("userInput-", userInput.value.length); 
    console.log("jobInput-" ,jobInput.value.length); 

    username.innerHTML = userInput.value;
    job.innerHTML = jobInput.value;
    closeModal();
}

function closeModal() {
    backgroundModal.style.display = 'none';
    modal.style.display = 'none';
}
