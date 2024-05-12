import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

// Form Validation
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should min of 4 characters')
    .max(16, 'Should max of 16 characters')
    .required('Length is required'),
});

const App = () => {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);

  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passLength: number) => {
    let characterList = '';
    const UpppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '+_)(*&^%$#@!';

    if (upperCase) {
      characterList += upperCase;
    }
    if (lowerCase) {
      characterList += lowerCase;
    }
    if (numbers) {
      characterList += numbers;
    }
    if (symbols) {
      characterList += symbols;
    }

    const passwordResult = createPassword(characterList, passLength);
    setPassword(passwordResult);
    setIsPassGenerated(true);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPasswordLength = () => {
    setPassword('');
    setIsPassGenerated(false);
    setUpperCase(false);
    setLowerCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <View>
      <Text>App</Text>
      <Text>App</Text>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
