import * as types from '../actions/actionTypes';
import { AsyncStorage } from 'react-native';
const initialState = {
  isLoading: false,
};

export default function userDataReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (action.type) {
    // case types.LOGIN_SUCCESS:
    //   // AsyncStorage.setItem('token', payload.token);
    //   return {
    //     ...state,
    //     ...payload,

    //   };
      case types.CHANGE_CONDITION:
          return Object.assign({}, state, action.payload);

    default:
      return state;
  }

}
