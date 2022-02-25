import React from 'react';
import {View, Text} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import tw from 'twrnc';
import {Container, Button, Input} from '../components';
import {setAuthenticated} from '../features/authSlice';
import {setToken} from '../helpers/token';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const handleFormSubmit = async values => {
    const token = 'dsaD#@$@#QWASC3qrsdf$EWEFFER#@%R67r5uhsfd';
    console.log(values);
    await setToken(token);
    dispatch(setAuthenticated(true));
  };

  const {handleChange, handleSubmit, handleBlur, values, errors, touched} =
    useFormik({
      initialValues: {email: '', password: ''},
      onSubmit: handleFormSubmit,
      validationSchema: Yup.object({
        email: Yup.string().email('邮箱格式错误！').required('邮箱不能为空！'),
        password: Yup.string().required('密码不能为空！'),
      }),
    });
  return (
    <Container style={tw`p-3`}>
      <View style={tw`h-24`}>
        <Text style={tw`text-2xl text-black text-center mb-4`}>
          欢迎使用ERP
        </Text>
      </View>
      <View style={tw`mb-6`}>
        <Input
          placeholder="邮箱"
          value={values.email}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
        />
        {touched.email && (
          <Text style={tw`text-red-500 mt-1`}>{errors.email}</Text>
        )}
      </View>
      <View style={tw`mb-6`}>
        <Input
          placeholder="密码"
          value={values.password}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
        />
        {touched.password && (
          <Text style={tw`text-red-500 mt-1`}>{errors.password}</Text>
        )}
      </View>
      <View style={tw`mb-4`}>
        <Button title={'登录'} onPress={handleSubmit} />
      </View>
    </Container>
  );
};

export default LoginScreen;
