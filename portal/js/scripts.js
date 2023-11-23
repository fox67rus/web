// // Открытие модального окна
// function openRegModal() {
//     document.getElementById('registrationModal').style.display = 'flex';
// }
//
// // Закрытие модального окна
// function closeRegModal() {
//     document.getElementById('registrationModal').style.display = 'none';
// }
//
// // Обработка формы регистрации (вы можете добавить свою логику обработки)
// document.getElementById('registrationForm').addEventListener('submit', function (event) {
//     event.preventDefault(); // Предотвращение отправки формы
//     // Ваш код обработки формы
//     closeRegModal(); // Закрытие модального окна после успешной регистрации (замените на свой код)
// });
//
// // Открытие модального окна для авторизации
// function openLoginModal() {
//     document.getElementById('loginModal').style.display = 'flex';
// }
//
// // Закрытие модального окна для авторизации
// function closeLoginModal() {
//     document.getElementById('loginModal').style.display = 'none';
// }
//
// // Обработка формы авторизации (вы можете добавить свою логику обработки)
// document.getElementById('loginForm').addEventListener('submit', function (event) {
//     event.preventDefault(); // Предотвращение отправки формы
//     // Ваш код обработки формы
//     closeLoginModal(); // Закрытие модального окна после успешной авторизации (замените на свой код)
// });


// валидация формы
$(document).ready(function() {
// Получаем элементы модальных окон
    var loginModal = $('#loginModal');
    var registrationModal = $('#registrationModal');

    // Получаем кнопки, открывающие модальные окна
    var loginButton = $('#loginButton');
    var registrationButton = $('#registrationButton');

    // Получаем элементы закрытия модальных окон
    var closeLoginModalButton = $('#closeLoginModal');
    var closeRegistrationModalButton = $('#closeRegistrationModal');

    // Добавляем обработчики событий для кнопок открытия и закрытия модальных окон
    loginButton.on('click', openLoginModal);
    registrationButton.on('click', openRegistrationModal);
    closeLoginModalButton.on('click', closeLoginModal);
    closeRegistrationModalButton.on('click', closeRegistrationModal);

    // Открытие модального окна для авторизации
    function openLoginModal() {
        loginModal.show();
    }

    // Закрытие модального окна для авторизации
    function closeLoginModal() {
        loginModal.hide();
    }

    // Открытие модального окна для регистрации
    function openRegistrationModal() {
        registrationModal.show();
    }

    // Закрытие модального окна для регистрации
    function closeRegistrationModal() {
        registrationModal.hide();
    }

    // Получаем элементы формы и поля
    var fullNameInput = $('#fullName');
    var usernameInput = $('#username');
    var emailInput = $('#email');
    var passwordInput = $('#password');
    var confirmPasswordInput = $('#confirmPassword');
    var agreeCheckbox = $('#agree');
    var registrationForm = $('#registrationForm');

    // Добавляем слушатели событий input на каждое поле
    fullNameInput.on('input', validateFullName);
    usernameInput.on('input', validateUsername);
    emailInput.on('input', validateEmail);
    passwordInput.on('input', validatePassword);
    confirmPasswordInput.on('input', validateConfirmPassword);
    agreeCheckbox.on('change', validateAgreeCheckbox);

    // Слушатель события отправки формы
    registrationForm.on('submit', function (event) {
        // Предотвращаем отправку формы, если есть ошибки
        if (!validateFullName() || !validateUsername() || !validateEmail() || !validatePassword() || !validateConfirmPassword() || !validateAgreeCheckbox()) {
            event.preventDefault();
        }
    });

    // Функции валидации для каждого поля
    function validateFullName() {
        var regex = /^[а-яА-ЯёЁ\s-]*$/;
        var isValid = regex.test(fullNameInput.val());
        toggleError(fullNameInput, !isValid, 'Введите корректное ФИО');
        return isValid;
    }

    function validateUsername() {
        var regex = /^[a-zA-Z]*$/;
        var isValid = regex.test(usernameInput.val());
        toggleError(usernameInput, !isValid, 'Логин должен содержать только латинские буквы');
        return isValid;
    }

    function validateEmail() {
        var regex = /\S+@\S+\.\S+/;
        var isValid = regex.test(emailInput.val());
        toggleError(emailInput, !isValid, 'Введите корректный Email');
        return isValid;
    }

    function validatePassword() {
        // Добавьте свои правила валидации пароля, если необходимо
        // В данном примере просто проверяем, что поле не пустое
        var isValid = passwordInput.val().trim() !== '';
        toggleError(passwordInput, !isValid, 'Введите пароль');
        return isValid;
    }

    function validateConfirmPassword() {
        var isValid = confirmPasswordInput.val() === passwordInput.val();
        toggleError(confirmPasswordInput, !isValid, 'Пароли не совпадают');
        return isValid;
    }

    function validateAgreeCheckbox() {
        var isValid = agreeCheckbox.prop('checked');
        toggleError(agreeCheckbox, !isValid, 'Согласитесь с обработкой персональных данных');
        return isValid;
    }

    // Функция для показа/скрытия сообщения об ошибке и стилизации поля
    function toggleError(inputElement, showError, errorMessage) {
        var errorElement = inputElement.next('.error-message');

        if (showError) {
            // Показываем сообщение об ошибке
            if (!errorElement.length) {
                errorElement = $('<div class="error-message"></div>');
                inputElement.after(errorElement);
            }
            errorElement.text(errorMessage);
            inputElement.addClass('error');
        } else {
            // Скрываем сообщение об ошибке
            if (errorElement.length) {
                errorElement.remove();
            }
            inputElement.removeClass('error');
        }
    }
});
