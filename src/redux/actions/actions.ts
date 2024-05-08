import {Action, AnyAction, Dispatch} from 'redux';
import {User} from '../../types/User';
import {ACTION_TYPES} from '../constants/ACTION_TYPES';
import {UNSPLASH_API_KEY} from '../constants/UNSPLASH_API_KEY';
import {ThunkDispatch} from 'redux-thunk';
import {getNormalizedData} from '../../utils/getNormalizedData';

export const fetchUsersPending = () => ({
  type: ACTION_TYPES.FETCH_USERS_PENDING,
});

export const fetchUsersResolved = (usersFromServer: User[]) => ({
  type: ACTION_TYPES.FETCH_USERS_RESOLVED,
  payload: usersFromServer,
});

export const fetchUsersRejected = (error: any) => ({
  type: ACTION_TYPES.FETCH_USERS_REJECTED,
  payload: error,
});

export const setSelectedPicture = (photoUrl: string) => ({
  type: ACTION_TYPES.SET_SELECTED_PICTURE,
  payload: photoUrl,
});

export const fetchUsers = (
  dispatch: Dispatch<Action> & ThunkDispatch<any, undefined, AnyAction>,
) => {
  const getData = async () => {
    dispatch(fetchUsersPending());
    dispatch(setSelectedPicture(''));

    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?count=10&client_id=${UNSPLASH_API_KEY}`,
      );
      const usersFromServer = await response.json();
      dispatch(fetchUsersResolved(getNormalizedData(usersFromServer)));
    } catch (error) {
      dispatch(fetchUsersRejected(error));
    }
  };

  getData();
};
