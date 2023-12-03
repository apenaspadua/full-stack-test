import Loader from 'components/Loader';
import React, { createContext, ReactNode, useContext, useState } from 'react';

interface LoadingProps {
  children: ReactNode;
}

interface LoadingContextValue {
  showLoading: () => void;
  hideLoading: () => void;
}

const LoadingContext = createContext<LoadingContextValue>({
  showLoading: () => {},
  hideLoading: () => {},
});

export const useLoading = (): LoadingContextValue => useContext(LoadingContext);

const LoadingProvider: React.FC<LoadingProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoading = () => {
    setIsLoading(true);
  };

  const hideLoading = () => {
    setIsLoading(false);
  };

  return (
    <LoadingContext.Provider value={{ showLoading, hideLoading }}>
      {children}
      {isLoading && <Loader />}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;