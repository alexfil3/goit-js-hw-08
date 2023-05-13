import throttle from "lodash.throttle";

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const messageTextarea = document.querySelector('.feedback-form textarea');

function populateData() {
    const previousData = JSON.parse(localStorage.getItem("feedback-form-state"))

    if (previousData) {
        emailInput.value = previousData.email;
        messageTextarea.value = previousData.message;
    }
}

populateData()

let formData = {
    email: '',
    message: '',
}

feedbackForm.addEventListener('submit', onSubmit);
emailInput.addEventListener('input', throttle(onEmailInput, 500));
messageTextarea.addEventListener('input', throttle(onMessageTextarea, 500));

function onSubmit(e) {
    e.preventDefault();

    if (formData.email === '' || formData.message === '') {
        alert("Please fill in all fields.")
        return
    } else {
        localStorage.removeItem("feedback-form-state");
    }
        console.log(formData)
        feedbackForm.reset()
    };

function onEmailInput() {
    formData.email = emailInput.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}

function onMessageTextarea() {
    formData.message = messageTextarea.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}