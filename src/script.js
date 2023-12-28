const form = document.getElementById('form');
const nameValue = document.getElementById('name');
const greeting = document.getElementById('greeting');
const clearButton = document.getElementById('clear');

//checking for stored name
const storedName = localStorage.getItem('name');

//condition for greeting display
if (storedName) {
    greeting.textContent = `Hello, ${storedName}. Nice to see you again!`;
    greeting.classList.add('text-xl', 'font-medium');
} else {
    greeting.textContent = `Tell me your name and I'll make sure to remember it.`;
}

//saving name to local storage after clicking submit
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

//setting clear button
clearButton.addEventListener('click', function() {
    localStorage.removeItem('name');
    greeting.textContent = `Tell me your name and I'll make sure to remember it.`
    greeting.classList.remove('text-xl', 'font-medium')
});


//dark mode toggler
const themeToggler = document.getElementById('themeToggler');

themeToggler.addEventListener('click', function(event) {
    event.preventDefault();
    const darkMode = document.documentElement.classList.toggle('dark');
    themeToggler.textContent = darkMode ? 'Light Mode' : 'Dark Mode';
})