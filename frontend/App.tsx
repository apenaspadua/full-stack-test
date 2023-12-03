import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Routes } from 'navigation/routes';
import LoadingProvider from 'core/providers/LoadingContext';
import { ToastProvider } from 'core/providers/ToastContext';
import { SWRConfig } from 'swr';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  });

  React.useEffect(() => {
    SplashScreen.preventAutoHideAsync();

    const simulateAsyncSetup = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      SplashScreen.hideAsync();
    };
    
    simulateAsyncSetup();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <SWRConfig>
        <LoadingProvider>
          <ToastProvider>
            <StatusBar style='dark' />
            <Routes />  
          </ToastProvider>
        </LoadingProvider>
      </SWRConfig>
    </NavigationContainer>
  );
}
