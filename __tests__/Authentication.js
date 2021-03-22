import 'react-native';
import React from 'react';
import {
  emailValidator, passwordValidator, UserNameValidator,
} from '../src/utils/utils.js';

// Note: test renderer must be required after react-native.
function allCombinations(obj) {
  let combos = [{}];
  for (const [key, values] of Object.entries(obj)) {
    combos = combos.flatMap((combo) => values.map((value) => ({ ...combo, [key]: value })));
  }
  return combos;
}

it('Fails if there are empty fields in the registration form', () => {
  const [username, password, randomEmail] = Array(4)
    .fill().map(() => Math.random()
      .toString(36)
      .substr(2, 10));
  const email = randomEmail.concat('@gmail.com');
  const validCombinations = 1;
  let testingValidCombinations = 0;
  const possibleState = {
    username: [username, '', ' ', null, undefined],
    password: [password, '', ' ', null, undefined],
    email: [email, '', ' ', null, undefined],
  };
  const combinations = allCombinations(possibleState);

  for (let i = 0; i <= combinations.length - 1; i++) {
    const invalidUsername = UserNameValidator(combinations[i].username);
    const invalidEmail = emailValidator(combinations[i].email);
    const invalidPassword = passwordValidator(combinations[i].password);
    if (!invalidUsername && !invalidEmail && !invalidPassword) {
      testingValidCombinations += 1;
    }
  }
  if (testingValidCombinations !== validCombinations) {
    fail('Undefined or null or empty string input field can be used to register an account!');
  }
});

it('Fails if the email contains no characters before @', () => {
  const wrongEmail = '@gmail.com';
  const invalidEmail = emailValidator(wrongEmail);
  if (!invalidEmail) {
    fail('Users can input just the domain of the email');
  }
});
