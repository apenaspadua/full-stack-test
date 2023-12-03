import { useNavigation } from '@react-navigation/native';
import { screensProps } from 'types/navigationProps';

export const useNavigationAction = () => {
  const navigation = useNavigation<screensProps>();

  const navigateTo = (screen: any, params?: object) => {
    navigation.navigate(screen, params);
  };

  const goBack = () => {
    navigation.goBack();
  };

  const navigateCleanRoutes = (screen: any, params?: object) => {
    navigation.reset({
      index: 0,
      routes: [{ name: screen, params }],
    });
  };

  return { navigateTo, navigateCleanRoutes, goBack };
};
