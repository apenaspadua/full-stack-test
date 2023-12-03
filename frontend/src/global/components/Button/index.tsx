import Text from 'components/Text';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface ButtonProps {
  label: string;
  width?: any;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, width, onPress }) => {
  return (
    <TouchableOpacity 
      style={[styles.button, { width: width || '90%' }]
    }>
      <Text bold style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

export default Button;