const showError = (input) => {
    input.classList.add('erro');
};

const hiddenError = (input) => {
    input.classList.remove('erro');
};

export const handleValidator = (el, disable, enable) => {
    const form = document.querySelector('form');
    const campos = form.querySelectorAll('input, textarea');

    const hasEmpty = [...campos].some(e => e.value.trim() === '');

    if (hasEmpty) {
        disable();
    } else {
        enable();
    }

    if (el.value.trim() === '') {
        showError(el);
    } else {
        hiddenError(el);
    }
};

export const editValidator = (el, disable, enable) => {

    if (el.value.trim() === '') {
        disable();
    } else {
        enable();
    }
};