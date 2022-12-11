import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    credentials: {},
  },
  reducers: {
    submitLogin: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    userout: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { submitLogin, userout } = userSlice.actions;

export const userData = (state) => state.user;

export default userSlice.reducer;
