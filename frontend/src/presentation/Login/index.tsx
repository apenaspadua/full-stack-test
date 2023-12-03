import Container from 'components/Container';
import React from 'react';
import { Animated, Image, View } from 'react-native';
import styles from './styles';
import Text from 'components/Text';
import Button from 'components/Button';
import Input from 'components/Input';

const Login: React.FC = () => {
  const logo = require('../../assets/logo.png');
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Container noMargin>
      <Animated.View style={[styles.animated, { opacity: fadeAnim }]}>
        {[...Array(4)].map((_, index) => (
          <Image
            key={index}
            style={styles.image}
            source={logo}
          />
        ))}
        <View style={styles.footer}>
          {/* <Input 
            label={'Usuário'} 
            width={'115%'}
          />
          
          <Input 
            label={'Senha'} 
            width={'115%'}
          /> */}

          <Button 
            label={'Acesse sua conta'} 
            width={'115%'}
            onPress={() => {}}
          />
        </View>
      </Animated.View>

     
    </Container>
  );
}

export default Login;