import axios from 'axios';

import * as types from './actionTypes';

// export const counterIncrease = () => ({type:COUNT});


export function changeCondition(payload) {
    return {
      type: types.CHANGE_CONDITION,
      payload
    }
  }