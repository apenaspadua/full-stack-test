import React from 'react';
import { SafeAreaView, View } from 'react-native';
import styles from './styles';
import { theme } from 'core/styles/theme';
import Topbar from 'components/Topbar';

interface ContainerProps {
  children: React.ReactNode;
  margin?: boolean;
  color?: string;
  topbar?: boolean;
} 

const Container: React.FC<ContainerProps> = ({ children, margin, color, topbar }) => {
  return (
    <View style={[styles.container, { backgroundColor: color || theme.colors.white}]}>
      <SafeAreaView style={[ styles.content, { marginHorizontal: margin ? 20 : null} ]}>
        { topbar && <Topbar />}
        { children }
      </SafeAreaView>
    </View>
  );
}

export default Container;