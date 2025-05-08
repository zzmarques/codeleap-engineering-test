const showError = (input) => {
    input.classList.add('erro');
};

const hiddenError = (input) => {
    input.classList.remove('erro');
};

export const handleValidator = (el, disable, enable) => {
    const form = document.querySelector('form');
    const campos = form.querySelectorAll('input, textarea');
    [...campos].some(e => e.value.trim() === "");
    
    if (el.value === '') {
        disable()
        showError(el);
    } else {
        enable()
        hiddenError(el);
    }
};