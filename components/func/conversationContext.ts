import * as React from 'react';

export type AppContextProps = {
    chat: {
        conversationId?: string;
    }
}

export const AppContext = React.createContext<AppContextProps>({ chat: {} });

export const AppProvider = AppContext.Provider;

export const useContext = () => React.useContext(AppContext);
