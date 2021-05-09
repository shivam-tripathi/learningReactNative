import is from 'is_js';

export const emailValidator = (email: string) => {
  if (is.not.existy(email) || email.length <= 0) {
    return 'Email cannot be empty.';
  }
  if (is.not.email(email)) {
    return 'Ooops! We need a valid email address.';
  }
  return '';
};

export const passwordValidator = (password: string) => {
  if (is.not.existy(password) || password.length <= 0) {
    return 'Password cannot be empty.';
  }

  return '';
};

export const nameValidator = (name: string) => {
  if (is.not.existy(name) || name.length <= 0) {
    return 'Name cannot be empty.';
  }

  return '';
};
