import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { getUser } from 'src/store/user';

export default function RouteGuard({ children: Children }) {
  const user = useSelector(getUser);
  return user.userId !== undefined ? Children : <Navigate replace to="/" />;
}
