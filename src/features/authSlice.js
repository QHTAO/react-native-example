import {createSlice} from '@reduxjs/toolkit';
export const authSlice = createSlice({
  name: 'auth',
  initialState: false,
  reducers: {
    setAuthenticated: (state, action) => {
      return action.payload;
    },
  },
});
export const {setAuthenticated} = authSlice.actions;
export default authSlice.reducer;
