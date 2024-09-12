// Simple alert for form submission
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Message Sent!');
});
