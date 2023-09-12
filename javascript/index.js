var typed = new Typed('#element', {
  strings: ['Projects', 'Community', 'Innovation', 'Contribution'],
  typeSpeed: 50,
});

let contact = JSON.parse(localStorage.getItem('contact')) || {
  name : '',
  email: '',
  message: ''
};

document.getElementById('name').value = contact.name;
document.getElementById('email').value = contact.email;
document.getElementById('message').value = contact.message;

function handleFormSubmit(event) {
  
  event.preventDefault(); // prevents reloading of website.
  
  contact.name = document.getElementById('name').value;
  contact.email = document.getElementById('email').value;
  contact.message = document.getElementById('message').value;

  localStorage.setItem('contact', JSON.stringify(contact));

}

const formElement = document.getElementById('messageForm');

formElement.addEventListener('submit', handleFormSubmit);