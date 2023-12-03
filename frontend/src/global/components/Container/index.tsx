import React from 'react';
import { SafeAreaView, View } from 'react-native';
import styles from './styles';

interface ContainerProps {
  children: React.ReactNode,
  noMargin?: boolean;
} 

const Container: React.FC<ContainerProps> = ({ children, noMargin }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={[ styles.content, { marginHorizontal: noMargin ? null : 20} ]}>
        { children }
      </SafeAreaView>
    </View>
  );
}

export default Container;