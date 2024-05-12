import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// Form Validation
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should min of 4 characters')
    .max(16, 'Should max of 16 characters')
    .required('Length is required'),
});

const App = () => {
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
