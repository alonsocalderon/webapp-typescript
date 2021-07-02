import { ActionMap, ActionTypes, SaluteType } from './types';

type SalutePayload = {
    [ActionTypes.SET_EXAMPLE_STATE]: SaluteType;
};

export type SaluteActions = ActionMap<SalutePayload>[keyof ActionMap<SalutePayload>];

export const initialState: SaluteType = 'Hello';

const saluteReducer = (state: SaluteType, action: SaluteActions) => {
    switch (action.type) {
        case ActionTypes.SET_EXAMPLE_STATE:
            return action.payload;
        default:
            return state;
    }
};

export default saluteReducer;
