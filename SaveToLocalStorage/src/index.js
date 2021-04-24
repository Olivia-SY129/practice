const select = document.querySelector('select');

const SELECTED_LS = 'Country';

function getData() {
    const selected = select.value;
    return selected.toUpperCase();
}

function saveData() {
    const country = localStorage;
    if ( getData() !== "") {
        country.setItem(SELECTED_LS, getData());
    } else {
        country.removeItem(SELECTED_LS);
    }
}

function init() {
    select.addEventListener('change', saveData);
}

init();





