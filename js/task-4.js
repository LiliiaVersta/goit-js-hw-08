const handleSubmit = event => {
  event.preventDefault(); //Отменяет действие по умолчанию для события
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  } else {
    console.log(`Email: ${email}, Password: ${password}`);
    form.reset(); //используется для очистки или для сброса к дефолтным значениям всех полей формы
  }
};
const registerForm = document.querySelector('.login-form');
registerForm.addEventListener('submit', handleSubmit); //addEventListener — это способ зарегистрировать
