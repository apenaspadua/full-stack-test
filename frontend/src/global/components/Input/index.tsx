import React, { ReactNode, useState } from 'react';
import {
  HelperText,
  TextInput as PaperTextInput,
  TextInputProps,
} from 'react-native-paper';
import { theme } from 'global/styles/theme';
import { DimensionValue, Keyboard, View } from 'react-native';

interface InputProps extends TextInputProps {
  label: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  error?: boolean;
  textError?: string;
  errorFormik?: any,
  mask?: any;
  width?: DimensionValue;
  textColor?: string;
  color?: string;
  showEditable?: boolean;
  right?: ReactNode;
  onTouch?: () => void;
}

const Input: React.FC<InputProps> = ({
  label,
  onChangeText,
  error,
  width = '100%',
  ...rest
}) => {
  
  return (
    <View style={{ width: width, alignSelf: 'center', borderRadius: 12 }}>
      <PaperTextInput
        mode='outlined'
        autoCapitalize='none'
        label={label}
        onSubmitEditing={Keyboard.dismiss}
        onChangeText={onChangeText}
        outlineColor={theme.colors.secondary}
        blurOnSubmit={false}
        error={error}
        style={{ height: 56, borderRadius: 12, bottom: 7}}
        theme={{
          colors: {
            primary: theme.colors.secondary,
            background: theme.colors.white,
            onSurfaceVariant: theme.colors.placeholder,
            error: theme.colors.error,
          },
        }}
        contentStyle={{
          fontFamily: theme.fonts.text400,
          fontSize: 16,
          color: theme.colors.primary,
          textAlign: 'auto',
          paddingTop: 10,
          paddingBottom: 10,
        }}
        selectionColor={theme.colors.primary}
        {...rest}
      />
      {error  && (
        <HelperText type='error' visible={true} style={{ marginLeft: -10 }}>
          {error}
        </HelperText>
      )}
    </View>
  );
};

export default Input;
