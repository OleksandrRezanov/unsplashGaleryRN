import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { fetchUsers } from '../redux/actions/actions';
import MiniPhotoCard from '../components/MiniPhotoCard';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { Loader } from '../components/Loader';
import { Error } from '../components/Error';

export const HomeScreen: React.FC = () => {
  const users = useAppSelector(state => state.users);
  const error = useAppSelector(state => state.error);
  const loading = useAppSelector(state => state.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchUsers(dispatch);
  }, [dispatch]);

  return (
    <SafeAreaView>
      <ScrollView>
        {!!error && <Error />}
        {!loading ? (
          users.map(user => (
            <MiniPhotoCard
              key={user.id}
              photoUrl={user.photoUrl}
              title={user.title}
              author={user.author}
            />
          ))
        ) : (
          <Loader />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
