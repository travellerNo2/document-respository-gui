import { createSlice } from '@reduxjs/toolkit';
import { getCookie, setCookie } from 'src/util/cookie';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: getCookie('userId') ?? '',
    username: getCookie('username') ?? '',
    role: getCookie('role') ?? '',
  },
  reducers: {
    setUser(state, action) {
      const { userId, username, role } = action.payload;
      state.userId = userId;
      state.username = username;
      state.role = role;
      setCookie('userId', userId);
      setCookie('username', username);
      setCookie('role', role);
    },
  },
});

export const getUser = (state) => state.user;
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
