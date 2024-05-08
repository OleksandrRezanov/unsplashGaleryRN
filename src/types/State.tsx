import {User} from './User';

export interface State {
  users: User[];
  selectedPhoto: string;
  loading: boolean;
  error: null | string;
}
