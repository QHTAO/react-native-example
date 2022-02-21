import {View, Text, TextInput, Keyboard, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email('邮箱格式错误！').required('邮箱不能为空！'),
  password: Yup.string().required('密码不能为空！'),
});

const App = () => {
  const {handleChange, handleSubmit, handleBlur, values, errors, touched} =
    useFormik({
      initialValues: {email: '', password: ''},
      onSubmit: values => {
        // 只有当validationSchema验证通过之后才会执行onSubmit方法
        Keyboard.dismiss();
        alert(`Email: ${values.email}, Password: ${values.password}`);
      },
      validationSchema,
    });

  return (
    <View style={tw`flex-1 p-8`}>
      <View style={tw`h-20`}>
        <Text style={tw`text-center text-xl text-black mt-6`}> use formik</Text>
      </View>
      <TextInput
        style={tw`h-10 p-2 border-2 border-gray-200 mb-6 rounded-xl`}
        placeholder="邮箱"
        value={values.email}
        onChangeText={handleChange('email')}
        //加上这個只要碰過就会检查validationSchema
        onBlur={handleBlur('email')}
      />
      {
        //显示错误
      }
      <Text style={tw`text-red-500`}>{touched.email + ' ' + errors.email}</Text>

      <TextInput
        style={tw`h-10 p-2 border-2 border-gray-200 mb-6 rounded-xl`}
        placeholder="密码"
        value={values.password}
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        error={errors.password}
      />

      <Text style={tw`text-red-500`}>{touched.email + ' ' + errors.email}</Text>

      <TouchableOpacity
        onPress={handleSubmit}
        style={tw`px-1 py-3 bg-blue-700 rounded-xl shadow-md`}>
        <Text style={tw`text-white  text-center`}>登录</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
