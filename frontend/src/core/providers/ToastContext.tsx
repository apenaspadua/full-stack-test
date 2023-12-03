import Toast from 'components/Toast';
import React from 'react';

interface ToastContextValue {
  showToast: (text: string) => void;
}

const ToastContext = React.createContext<ToastContextValue>({
  showToast: () => {}
});

export const useToast = (): ToastContextValue => React.useContext(ToastContext);

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toastVisible, setToastVisible] = React.useState(false);
  const [toastText, setToastText] = React.useState('');

  const showToast = (text: string) => {
    setToastText(text);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast visible={toastVisible} text={toastText} />
    </ToastContext.Provider>
  );
};
