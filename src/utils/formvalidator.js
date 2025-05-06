const showError = (input) => {
    input.classList.add('erro');
};

const hiddenError = (input) => {
    input.classList.remove('erro');
};

export const handleValidator = (el) => {
    if (el.value === '') {
        showError(el);
    } else {
        hiddenError(el);
    }
};