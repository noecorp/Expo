import _ from 'lodash';
import {
  LIKE_JOB,
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case LIKE_JOB:
      return _.uniqBy([
        ...state, action.payload
      ], 'jobkey')
    default:
      return state;
  }
}