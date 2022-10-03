const form = document.getElementById('form');
const btn = document.getElementById('button');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');

btn.addEventListener('click', submit);

function submit() {
    if (password.value.length >= 4 && password.value == confirm_password.value) {
        form.submit();
    };
};