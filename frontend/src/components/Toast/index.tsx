import React from 'react';
import { View, Text, Animated } from 'react-native';
import Info from 'assets/svg/info';
import { styles } from './styles';

interface ToastErrorProps {
  visible: boolean;
  text: string;
}

const Toast: React.FC<ToastErrorProps> = ({ visible, text }) => {
  const [opacity] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(opacity, {
      toValue: visible ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [visible, opacity]);

  return (
    <Animated.View style={{ ...styles.container, opacity }}>
      <View style={styles.icon}>
        <Info />
      </View>
      <Text style={styles.text}>{text}</Text>
    </Animated.View>
  );
};

export default Toast;
