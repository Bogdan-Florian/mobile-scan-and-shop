import { Alert } from 'react-native';

export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 1 || email === ' ') return 'Email cannot be empty.';
  if (!re.test(email)) return 'Ooops! We need a valid email address.';

  return '';
}

export function passwordValidator(password) {
  if (!password || password.length <= 0 || password === ' ') return 'Password cannot be empty.';
  if (password.length > 1 && password.length < 5) return 'Password must be of longer length';
  return '';
}

export function nameValidator(name) {
  if (!name || name.length <= 1 || name === ' ') return 'Name cannot be empty.';
  return '';
}

export function UserNameValidator(username) {
  if (!username || username.length <= 1 || username === ' ') return 'Username cannot be empty.';
  return '';
}
