// subscription.js

const form = document.getElementById('subscription-form');
const inputs = form.querySelectorAll('input');
const formTitle = document.getElementById('form-title');

// Validaciones individuales
function validateInput(input) {
  const value = input.value.trim();
  const id = input.id;
  const errorMsg = input.nextElementSibling;

  switch (id) {
    case 'nombre':
      if (value.length <= 6 || !value.includes(' ')) {
        errorMsg.textContent = 'Debe tener más de 6 letras y al menos un espacio.';
        return false;
      }
      break;

    case 'email':
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errorMsg.textContent = 'Email inválido.';
        return false;
      }
      break;

    case 'password':
      if (!/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(value)) {
        errorMsg.textContent = 'Debe tener al menos 8 caracteres, letras y números.';
        return false;
      }
      break;

    case 'repeat-password':
      const original = document.getElementById('password').value;
      if (value !== original) {
        errorMsg.textContent = 'Las contraseñas no coinciden.';
        return false;
      }
      break;

    case 'edad':
      if (!Number.isInteger(+value) || +value < 18) {
        errorMsg.textContent = 'Debés ser mayor o igual a 18 años.';
        return false;
      }
      break;

    case 'telefono':
      if (!/^\d{7,}$/.test(value)) {
        errorMsg.textContent = 'Debe tener al menos 7 dígitos sin espacios ni símbolos.';
        return false;
      }
      break;

    case 'direccion':
      if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*\s).{5,}$/.test(value)) {
        errorMsg.textContent = 'Debe tener letras, números y un espacio.';
        return false;
      }
      break;

    case 'ciudad':
      if (value.length < 3) {
        errorMsg.textContent = 'Debe tener al menos 3 caracteres.';
        return false;
      }
      break;

    case 'codigo-postal':
      if (value.length < 3) {
        errorMsg.textContent = 'Debe tener al menos 3 caracteres.';
        return false;
      }
      break;

    case 'dni':
      if (!/^\d{7,8}$/.test(value)) {
        errorMsg.textContent = 'Debe tener 7 u 8 dígitos.';
        return false;
      }
      break;
  }

  errorMsg.textContent = '';
  return true;
}

// Eventos: blur y focus
inputs.forEach(input => {
  input.addEventListener('blur', () => validateInput(input));

  input.addEventListener('focus', () => {
    input.nextElementSibling.textContent = '';
  });

  // Bonus: actualizar "HOLA [NOMBRE]" en tiempo real
  if (input.id === 'nombre') {
    input.addEventListener('keydown', () => {
      setTimeout(() => {
        formTitle.textContent = 'HOLA ' + input.value.toUpperCase();
      }, 10);
    });
  }
});

// Envío final
form.addEventListener('submit', e => {
  e.preventDefault();

  let isValid = true;
  let mensaje = '';

  inputs.forEach(input => {
    const ok = validateInput(input);
    if (!ok) isValid = false;
    mensaje += `${input.previousElementSibling.textContent}: ${input.value}\n`;
  });

  if (!isValid) {
    alert('Por favor corregí los errores antes de enviar.');
  } else {
    alert('Formulario enviado con éxito:\n\n' + mensaje);
    form.reset();
    formTitle.textContent = 'HOLA';
  }
});
