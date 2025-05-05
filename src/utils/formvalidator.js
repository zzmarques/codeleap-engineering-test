const showError = (input) => {
    input.classList.add('erro');
};

const hiddenError = (input) => {
    input.classList.remove('erro');
};

export const handleValidator = (nameInput) => {
    
    if (nameInput.value === '') {
        showError(nameInput);
    } else {
        hiddenError(nameInput);
    }
};