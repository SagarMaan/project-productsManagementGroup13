//======================================= Name Regex Validation ========================================//


const validateName = (name) => {
    return (/^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i.test(name));
}


//====================================== Email Regex Validation =======================================//


const validateEmail = (email) => {
    return (/^[a-z]{1}[a-z0-9._]{1,100}[@]{1}[a-z]{2,15}[.]{1}[a-z]{2,10}$/.test(email));
}


//===================================== Password Regex Validation ====================================//


const validatePassword = (password) => {
    return (/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/.test(password));
}


//==================================== Number Regex Validation ======================================//


const validateMobileNo = (Number) => {
    return ((/^((\+91)?|91)?[6789][0-9]{9}$/g).test(Number));
}

//===================================== Place Regex Validation ===================================//


const validatePlace = (value) => {
    return (/^[^\W\d_]+\.?(?:[-\s'’][^\W\d_]+\.?)*$/).test(value);
}

const ValidateFile = (img) => {
    const regex = /(\/*\.(?:png|gif|webp|jpeg|jpg))/.test(img)
    return regex
  }


//Style Validation
const ValidateStyle = function (value) {
    return /^[a-zA-Z _.-]+$/.test(value);
  };

//Price validation
const validatePrice = function (price) {
    return /^\d{0,8}(\.\d{1,2})?$/.test(price);
  };

  
  const validateShipping = function (isFreeShipping) {
    return /^(true|false)$/.test(isFreeShipping);
  };

module.exports = { validateName, validateEmail, validatePassword, validateMobileNo, validatePlace,validatePrice,ValidateStyle,ValidateFile,validateShipping }