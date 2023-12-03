import React from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Text from 'components/Text';

interface ButtonProps {
  label: string;
  width?: any;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, width, onPress }) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
      style={[styles.button, { width: width || '100%' }]
    }>
      <Text bold style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

export default Button;