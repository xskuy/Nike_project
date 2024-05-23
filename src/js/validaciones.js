$(document).ready(function() {
  $('#personal-info-form').on('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Limpiar errores previos
    $('input, textarea').removeClass('error');
    $('.error-message').remove();

    var isValid = true;

    // Validar nombre
    var firstName = $('#first-name').val().trim();
    if (firstName === '') {
      $('#first-name').addClass('error');
      $('#first-name').after('<span class="error-message text-red-500 text-sm">Este campo es obligatorio.</span>');
      isValid = false;
    }

    // Validar apellido
    var lastName = $('#last-name').val().trim();
    if (lastName === '') {
      $('#last-name').addClass('error');
      $('#last-name').after('<span class="error-message text-red-500 text-sm">Este campo es obligatorio.</span>');
      isValid = false;
    }

    // Validar correo electrónico
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

    // Validar mensaje
    var message = $('#message').val().trim();
    if (message === '') {
      $('#message').addClass('error');
      $('#message').after('<span class="error-message text-red-500 text-sm">Este campo es obligatorio.</span>');
      isValid = false;
    }

    // Si el formulario es válido y borrar los campos
    if (isValid) {
      alert('El formulario ha sido enviado correctamente.');
      $('#personal-info-form')[0].reset();
    }
  });
});
