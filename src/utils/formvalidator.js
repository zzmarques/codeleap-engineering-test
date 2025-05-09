// Função para adicionar classe de erro no campo
const showError = (input) => {
    input.classList.add('erro');
};

// Função para remover classe de erro do campo
const hiddenError = (input) => {
    input.classList.remove('erro');
};

// Função de validação geral do formulário
export const handleValidator = (el, disable, enable) => {
    const form = document.querySelector('form');
    const campos = form.querySelectorAll('input, textarea');

    // Verifica se há campos vazios
    const hasEmpty = [...campos].some(e => e.value.trim() === '');

    if (hasEmpty) {
        disable();
    } else {
        enable();
    }

    // Função para mostrar ou esconder erro no campo atual
    if (el.value.trim() === '') {
        showError(el);
    } else {
        hiddenError(el);
    }
};

// Função para validar um único campo (edição)
export const editValidator = (el, disable, enable) => {

    if (el.value.trim() === '') {
        disable();
    } else {
        enable();
    }
};