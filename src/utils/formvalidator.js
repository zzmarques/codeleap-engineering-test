const showError = (input) => {
    input.classList.add('erro');
};

const hiddenError = (input) => {
    input.classList.remove('erro');
};

export const handleValidator = () => {
    const form = document.querySelector('form');
    const campos = form.querySelectorAll('input, textarea');

    campos.forEach(el => {
        if (el.value === '') {
            showError(el);
        } else {
            hiddenError(el);
        }
    })
};