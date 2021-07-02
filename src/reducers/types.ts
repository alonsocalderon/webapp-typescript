// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
        ? {
              type: Key;
          }
        : {
              type: Key;
              payload: M[Key];
          };
};

export enum ActionTypes {
    SET_EXAMPLE_STATE = 'SET_EXAMPLE_STATE'
}

export type SaluteType = 'Hello' | 'Hi';

export type GlobalStateType = {
    salute: SaluteType;
};
