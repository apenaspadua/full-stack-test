import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import styles from './styles';
import { theme } from 'core/styles/theme';
import Text from 'components/Text';

interface InputProps extends TextInputProps {
  label: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  error?: any;
}

const Input: React.FC<InputProps> = ({
  label,
  onChangeText,
  error,
  ...rest
}) => {
  
  return (
    <>
      <View style={[styles.container, { borderColor: error ? theme.colors.error : theme.colors.inputColor}]}>
        <TextInput 
          style={styles.input}
          onChangeText={onChangeText}
          placeholder={label}
          {...rest}
        />
      </View>
      {error && (
        <Text regular style={styles.error}>{error}</Text>
      )}
    </>
  );
};

export default Input;
