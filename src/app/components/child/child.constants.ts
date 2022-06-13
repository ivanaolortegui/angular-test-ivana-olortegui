export const user_validation =
{
  'name': [
    { type: 'required', message: 'El nombre es requerido' },
    { type: 'maxlength', message: 'El nombre no puede ser mayor de 50 caracteres' },
  ],
  'lastname': [
    { type: 'required', message: 'El apellido es requerido' },
    { type: 'maxlength', message: 'El apellido no puede ser mayor de 50 caracteres' },
  ],
  'email': [
    { type: 'required', message: 'Email es requerido' },
    { type: 'email', message: 'Ingresa un correo validos' }
  ],
  'password': [
    { type: 'pattern', message: 'Tu contraseña deberá contener al menos un caracter especial y un número' },
    { type: 'required', message: 'Tu contraseña es requerido' },
    { type: 'minlength', message: 'Tu contraseña deberá tener 6 caracteres de largo' },
  ],
};
