import { theme } from 'core/styles/theme';
import React from 'react';
import { Text as TextRN, TextStyle } from 'react-native';

interface TextProps {
  children: any,
  title?: boolean;
  regular?: boolean; 
  bold?: boolean;
  space?: boolean;
  style?: TextStyle;
  color?: string;
}

const Text: React.FC<TextProps> = ({
  children,
  title = false,
  regular = false,
  bold = false,
  space,
  color,
  style
}) => {
  const textStyle: TextStyle = {
    fontSize: title ? 32 : regular ? 16 : 18,
    fontFamily: bold ? theme.fonts.text700 : regular ? theme.fonts.text400 : theme.fonts.text500,
    color: color || theme.colors.primary,
    lineHeight: title ? 31 : 21,
    marginTop:  space ? 12 : 5,
    ...style,
  };

  return (
    <TextRN style={textStyle}>
      {children}
    </TextRN>
  );
};

export default Text;
