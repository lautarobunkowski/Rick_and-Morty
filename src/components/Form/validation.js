const validation = (userData) => {
  const errors = {};
  
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const validateEmail = userData.email.length && userData.email.length <= 35 && regexEmail.test(userData.email) // true - false
  if(userData.email && !validateEmail) {
      errors['email'] = "Ingresa un email válido";
  } else {
      errors['email'] = "";
  }
  
  const regexPassword = /^(?=.*\d).{6,10}$/;
  const validatePassword = regexPassword.test(userData.password);
  if(!validatePassword && userData.password) {
      errors['password'] = "Ingresa un password válido";
  }else {
      errors['password'] = "";
  }

  return errors;
}

export default validation;