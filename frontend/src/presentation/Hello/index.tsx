import React from 'react';
import { Animated, View } from 'react-native';
import styles from './styles';
import { useNavigationAction } from 'navigation/hooks/useNavigationAction';
import Container from 'components/Container';
import Text from 'components/Text';
import Button from 'components/Button';

const Hello: React.FC = () => {
  const logo = require('../../assets/logo.png');

  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const slideAnim = React.useRef(new Animated.Value(100)).current;

  const { navigateTo } = useNavigationAction();

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  return (
    <Container>
      <Animated.Image 
        style={{
          ...styles.image,
          opacity: fadeAnim
        }} 
        source={logo}
      />

      <Animated.View
        style={{
          ...styles.footer,
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        }}
      >
        <View style={styles.texts}>
          <Text title bold>Welcome</Text>
          <Text regular space>My Tapp - Mobile app designed by Deepak Kunder. App developed for the full-stack-developer challenge.</Text>
        </View>

        <Button 
          label='Login'
          onPress={() => navigateTo('Login')}
        />

      </Animated.View>
    </Container>
  );
}

export default Hello;