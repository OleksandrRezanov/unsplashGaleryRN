import { State } from '../../types/State';
import { ACTION_TYPES } from '../constants/actionTypes';

const initialState: State = {
  users: [],
  selectedPhoto: '',
  loading: false,
  error: null,
};

interface Action {
  type: string;
  payload?: any;
}

export const usersReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_USERS_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ACTION_TYPES.FETCH_USERS_RESOLVED:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: null,
      };

    case ACTION_TYPES.FETCH_USERS_REJECTED:
      return {
        ...state,
        users: [],
        loading: false,
        error: action.payload,
      };

    case ACTION_TYPES.SET_SELECTED_PICTURE:
      return {
        ...state,
        selectedPhoto: action.payload,
      };

    default:
      return state;
  }
};
