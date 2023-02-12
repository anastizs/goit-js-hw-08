import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

populateForm();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

const formData = {};

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    return;
  }

  try {
    const savedForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
    refs.email.value = savedForm.email;
    refs.message.value = savedForm.message;
  } catch (error) {
    alert('Не виходить отримати дані.');
  }
}
function onFormSubmit(e) {
  e.preventDefault();
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}
