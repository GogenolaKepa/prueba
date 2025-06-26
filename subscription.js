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

/* Envío final
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
*/

//Clase 10 Actividad
document.getElementById('subscription-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Recolectar datos
  const data = {
    nombre: document.getElementById('nombre').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
    repeatPassword: document.getElementById('repeat-password').value,
    edad: document.getElementById('edad').value,
    telefono: document.getElementById('telefono').value,
    direccion: document.getElementById('direccion').value,
    ciudad: document.getElementById('ciudad').value,
    codigoPostal: document.getElementById('codigo-postal').value,
    dni: document.getElementById('dni').value
  };

  // Validar
  if (data.password !== data.repeatPassword) {
    return mostrarModal("Error: las contraseñas no coinciden", false);
  }

  // Enviar si está todo ok
  enviarDatos(data);
});

function enviarDatos(data) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(responseData => {
    mostrarModal("Suscripcion realizada con exito!", true, responseData);
    localStorage.setItem('datosSuscriptor', JSON.stringify(data));
  })
  .catch(error => {
    mostrarModal("Hubo un error en la suscripción", false, error.message);
  });
}

function mostrarModal(titulo, exito, datos = "") {
  document.getElementById('modal-title').textContent = titulo;
  document.getElementById('modal-msg').textContent = exito ? JSON.stringify(datos, null, 2) : datos;
  document.getElementById('modal').classList.remove('hidden');
}

document.getElementById('modal-close').addEventListener('click', () => {
  document.getElementById('modal').classList.add('hidden');
});

window.onload = function () {
  const datos = JSON.parse(localStorage.getItem('datosSuscriptor'));
  if (datos) {
    document.getElementById('nombre').value = datos.nombre;
    document.getElementById('email').value = datos.email;
    document.getElementById('password').value = datos.password;
    document.getElementById('repeat-password').value = datos.repeatPassword;
    document.getElementById('edad').value = datos.edad;
    document.getElementById('telefono').value = datos.telefono;
    document.getElementById('direccion').value = datos.direccion;
    document.getElementById('ciudad').value = datos.ciudad;
    document.getElementById('codigo-postal').value = datos.codigoPostal;
    document.getElementById('dni').value = datos.dni;
  }
};
