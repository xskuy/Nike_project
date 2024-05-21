$(document).ready(function() {
  $('#personal-info-form').on('submit', function(event) {
    event.preventDefault(); 


    $('input, textarea').removeClass('error');
    $('.error-message').remove();

    var isValid = true;


    var firstName = $('#first-name').val().trim();
    if (firstName === '') {
      $('#first-name').addClass('error');
      $('#first-name').after('<span class="error-message text-red-500 text-sm">Este campo es obligatorio.</span>');
      isValid = false;
    }


    var lastName = $('#last-name').val().trim();
    if (lastName === '') {
      $('#last-name').addClass('error');
      $('#last-name').after('<span class="error-message text-red-500 text-sm">Este campo es obligatorio.</span>');
      isValid = false;
    }


    var email = $('#email').val().trim();
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '') {
      $('#email').addClass('error');
      $('#email').after('<span class="error-message text-red-500 text-sm">Este campo es obligatorio.</span>');
      isValid = false;
    } else if (!emailPattern.test(email)) {
      $('#email').addClass('error');
      $('#email').after('<span class="error-message text-red-500 text-sm">Por favor, ingrese un correo electrónico válido.</span>');
      isValid = false;
    }


    var message = $('#message').val().trim();
    if (message === '') {
      $('#message').addClass('error');
      $('#message').after('<span class="error-message text-red-500 text-sm">Este campo es obligatorio.</span>');
      isValid = false;
    }

    if (isValid) {
      alert('El formulario ha sido enviado correctamente.');
      $('#personal-info-form')[0].reset();
    }
  });
});
