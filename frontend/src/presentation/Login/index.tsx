import React from 'react';
import styles from './styles';
import { theme } from 'core/styles/theme';
import { TouchableOpacity, View } from 'react-native';
import Container from 'components/Container';
import Input from 'components/Input';
import Button from 'components/Button';
import Text from 'components/Text';
import { useFormik } from 'formik';
import { validationSchemaLogin } from 'core/helpers/schemaLogin';
import { useToast } from 'core/providers/ToastContext';
import { useLoading } from 'core/providers/LoadingContext';
import LoginService from 'application/modules/login/LoginService';
import { sessionStore } from 'core/stores/SessionStore';
import { useNavigationAction } from 'navigation/hooks/useNavigationAction';

const Login: React.FC = () => {
  const { showLoading, hideLoading } = useLoading();
  const { navigateCleanRoutes } = useNavigationAction();
  const { showToast } = useToast();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: validationSchemaLogin,
    onSubmit: (values) => {
      const dataToSubmit = {
        ...values
      };
      handleLogin(dataToSubmit);
    }
  })

  const handleLogin = async (values: any) => {    
    showLoading();
    try {
      const response = await LoginService.login(values);
      sessionStore.setToken(response.data.token);
      navigateCleanRoutes('Home', {username: values.username})
    } 
    catch(e: any) {      
      showToast(e.response.data.message);
    }
    finally {
      hideLoading();
    }
  }

  return (
    <Container
      color={theme.colors.secondary}
      topbar
    >
    <View style={styles.texts}>
      <Text title bold>Login</Text>
      <Text regular space>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
    </View>

    <View style={styles.content}>
      <Input
        autoFocus
        label='Username'
        autoCapitalize='none'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        onBlur={() => formik.handleBlur('username')}
        error={formik.touched.username && formik.errors.username}
      />
    
      <Input 
        label='Password'
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        onBlur={() => formik.handleBlur('password')}
        error={formik.touched.password && formik.errors.password}
      />

      <TouchableOpacity style={styles.forgotPass}>
        <Text>Forgot password?</Text>
      </TouchableOpacity>

      <Button
        label='Enter'
        onPress={formik.submitForm}
      />
    </View>
    </Container>
  );
}

export default Login;