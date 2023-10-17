import * as React from 'react';

type ContextProps = {
  toggleColorMode: () => void
}

export const UiContext = React.createContext({} as ContextProps);

export default UiContext;