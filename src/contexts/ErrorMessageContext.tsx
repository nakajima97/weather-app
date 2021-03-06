import { FC, useState, createContext } from 'react';

type ContextType = {
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
};

const ErrorMessageContext = createContext({} as ContextType);

const ErrorMessageProvider: FC = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <ErrorMessageContext.Provider value={{ errorMessage, setErrorMessage }}>
      {children}
    </ErrorMessageContext.Provider>
  );
};

export { ErrorMessageContext, ErrorMessageProvider };
