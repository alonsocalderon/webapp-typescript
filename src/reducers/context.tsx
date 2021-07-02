import React, { createContext, Dispatch, FC, useReducer, ReactNode } from 'react';
import saluteReducer, { SaluteActions, initialState as saluteInitialState } from './salute-reducer';
import { GlobalStateType } from './types';

const initialState: GlobalStateType = {
    salute: saluteInitialState
};

const AppContext = createContext<{
    state: GlobalStateType;
    dispatch: Dispatch<SaluteActions>;
}>({
    state: initialState,
    dispatch: () => null
});

const mainReducer = ({ salute }: GlobalStateType, action: SaluteActions) => ({
    salute: saluteReducer(salute, action as SaluteActions)
});

type AppProviderType = {
    children?: ReactNode;
};

const AppProvider: FC = ({ children }: AppProviderType) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
