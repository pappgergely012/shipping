export const InputValidation = (type, value) => {
  let hasError     = false;
  let errorMessage = '';

  const emailType = /.+\.+\..+/;

  switch(type){
    case 'email':
        if(emailType.test(value) === false ){
          hasError = true;
          errorMessage = "Írj be egy létező email címet pl: papp.gergely012@gmail.com";
        }
      break;
    case 'password': 
        if(value.length < 8){
          hasError = true
          errorMessage = "A jelszó minimum 8 karakter legyen!";
        } 
      break;
    default:
        hasError = false;
      break;
  }

  const returnObj = {
    hasError: hasError,
    errorMessage: errorMessage
  }

  return returnObj;
}

export const CompareValues = (val1, val2) => {
  let hasError = false;

  if(val1 !== val2){
    hasError = true;
  }

  return hasError;
}
