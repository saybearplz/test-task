export default {
  // Валидация e-mail
  isEmailValid(email) {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
    return (email == '') ? false : (reg.test(email)) ? true : false;
  },

  // Валидация телефона
  isTelValid(tel) {
    const re = /^\+?[78][-\(]?\d{3}\)|\d{3}-?\d{2}-?\d{2}$/;
    const valid = re.test(tel);
    return valid;
  }
}
