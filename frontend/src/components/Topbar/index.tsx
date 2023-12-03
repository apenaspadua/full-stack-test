import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { useNavigationAction } from 'navigation/hooks/useNavigationAction';
import { AntDesign } from '@expo/vector-icons'; 
import { theme } from 'core/styles/theme';


const Topbar: React.FC = () => {
  const { goBack } = useNavigationAction();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <AntDesign name='arrowleft' size={24} color={theme.colors.primary} />
      </TouchableOpacity>
    </View>
  );
}

export default Topbar;