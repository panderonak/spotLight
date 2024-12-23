function validateEmail(email) {
  const emailRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
  return emailRegex.test(email);
}

function validatePassword(password) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return passwordRegex.test(password);
}

function validateUsername(username) {
  const usernameRegex = /^(?!.*\.\.)(?!.*\.$)[a-zA-Z0-9._-]{1,30}$/;
  return usernameRegex.test(username);
}

export { validateEmail, validatePassword, validateUsername };
