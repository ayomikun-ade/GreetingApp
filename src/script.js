const form = document.getElementById('form');
const nameValue = document.getElementById('name');
const greeting = document.getElementById('greeting');
const clearButton = document.getElementById('clear');

const storedName = localStorage.getItem('name');

if (storedName) {
    greeting.textContent = `Hello, ${storedName}. Nice to see you again!`;
    greeting.classList.add('text-xl', 'font-medium');
} else {
    greeting.textContent = `Tell me your name and I'll make sure to remember it.`;
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = nameValue.value;
    if (name) {
        localStorage.setItem('name', name);
        greeting.textContent = `Hello, ${name}!`;
        greeting.classList.add('text-xl', 'font-medium');
    }
    nameValue.value = '';
});

clearButton.addEventListener('click', function() {
    localStorage.removeItem('name');
    greeting.textContent = `Tell me your name and I'll make sure to remember it.`
    greeting.classList.remove('text-xl', 'font-medium')
});