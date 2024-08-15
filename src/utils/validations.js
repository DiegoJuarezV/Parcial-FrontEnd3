export const validarPelicula = (userName) => {
  const espacios = userName.trim();

  if (espacios.length >= 3) {
    return true;
  } else {
    return false;
  }
}

export const validarUsuario = (userName) => {
  const espacios = userName.trim();

  if (espacios.length >= 6) {
    return true;
  } else {
    return false;
  }
}

export const validarEmail = (email) => {
  const espacios = email.trim();
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (espacios.length > 6 && emailRegex.test(espacios)) {
    return true;
  } else {
    return false;
  }
}