import React from 'react';
import { Text as TextRN, TextStyle } from 'react-native';
import { theme } from 'global/styles/theme';

interface TextProps {
  children: any,
  title?: boolean;
  regular?: boolean; 
  bold?: boolean;
  space?: boolean;
  style?: TextStyle
}

const Text: React.FC<TextProps> = ({
  children,
  title = false,
  regular = false,
  bold = false,
  space,
  style
}) => {
  const textStyle: TextStyle = {
    fontSize: title ? 24 : regular ? 16 : 18,
    fontFamily: bold ? theme.fonts.text700 : regular ? theme.fonts.text400 : theme.fonts.text500,
    color: theme.colors.white,
    lineHeight: title ? 31 : 21,
    marginTop:  space ? 5 : 0,
    ...style,
  };

  return (
    <TextRN style={textStyle}>
      {children}
    </TextRN>
  );
};

export default Text;
