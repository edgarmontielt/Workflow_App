import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    logged: false,
    name: "",
    loading: false,
    error: true,
    message: "",
  },
  reducers: {
    login(state, action) {
      state.logged = true;
      state.name = "Edgar";
      state.message = "Session iniciada correctamente";
    },

    logout(state, action) {
      state.logged = false;
      state.name = "";
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
