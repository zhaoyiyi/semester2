describe('form validation', function () {
  var form = {};
  form.username = {};
  form.password = {};


  it('should return true when username and password match', function() {
    form.username.value = '12345';
    form.password.value = '12345';
    expect(checkLogin(form)).toBe(true);
  });
  it('should return invalid message when one of them does not match', function() {
    form.username.value = '123456';
    form.password.value = '12345';
    expect(checkLogin(form)).toEqual('Invalid Username or Password.');
  });
  it('should let user know which field is empty', function() {
    form.username.value = '123456';
    form.password.value = '';
    expect(checkLogin(form)).toEqual('No password entered.');

    form.username.value = '';
    form.password.value = '12345';
    expect(checkLogin(form)).toEqual('No username entered.');

  });
});

describe('md5 encryption', function() {
  it('should return 32 character long string with any input', function() {
    expect( md5Encrypt('1').length).toEqual(32);
    expect( md5Encrypt('112312').length).toEqual(32);
    expect( md5Encrypt('ablk').length).toEqual(32);
    expect( md5Encrypt('sdafasdfasdfsdfsdfsdfsdfsdfsdfsdf').length).toEqual(32);
    expect( md5Encrypt().length).toEqual(32);
    expect( md5Encrypt(123).length).toEqual(32);
  });
});
