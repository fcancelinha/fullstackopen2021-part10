import React from 'react';
import { Formik } from 'formik';
import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";
import theme from '../themes/theme';
import * as yup from 'yup';

const initalValues = {
  username: '',
  password: '',
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    padding: 7,
    width: 300,
    alignSelf: 'center'
  },
  loginButton: {
    marginTop: 2,
    width: 300,
    borderRadius: 5, 
    backgroundColor: theme.colors.primary,
    padding: 10,
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center'
  }
});


const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('username is required'),
  password: yup
    .string()
    .required('password is required'),
});

const SignIn = () => {

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <View style={style.container}>
      <Formik initialValues={initalValues} onSubmit={onSubmit} validationSchema={validationSchema}>

        {(props) => (
          <View>

            <TextInput
              placeholder="Username"
              value={props.values.username}
              onChangeText={props.handleChange('username')}
              style={style.input}
            />

            <TextInput
              placeholder="Password"
              value={props.values.password}
              onChangeText={props.handleChange('password')}
              style={style.input}
              secureTextEntry={true}
            />

          
            <Pressable style={style.loginButton} onPress={props.handleSubmit}>
              <Text style={{color: 'white'}}>Login</Text>
            </Pressable>

          </View>
        )}
      </Formik>
    </View>
  );
};


export default SignIn;