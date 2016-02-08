function md5Encrypt(input) {
  return CryptoJS.MD5('' + input).toString();
}
function checkLogin(form) {
  var USERNAME = md5Encrypt('12345');
  var PASSWORD = md5Encrypt('12345');
  var username = form.username.value;
  var password = form.password.value;

  if (username === '') {
    return 'No username entered.';
  }
  if (password === '') {
    return 'No password entered.';
  }
  if (md5Encrypt(username) !== USERNAME ||
      md5Encrypt(password) !== PASSWORD) {
    return 'Invalid Username or Password.';
  }

  return true;
}