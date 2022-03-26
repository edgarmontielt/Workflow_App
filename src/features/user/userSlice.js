import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { post } from "../../api";

export const login = createAsyncThunk(
  "user/login",
  async (credentials, thunkAPI) => {
    const res = await fetch(
      "https://backendtzuzulcode.wl.r.appspot.com/auth/login",
      {
        method: "POST",
        credentials: "include", // Permite realizar la peticion al server, el server sabe cuales y las envía
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );
    const data = await res.json();
    //action.payload del reducer (fullfilled)

    if (!data.id) {
      console.log("Lanzando error");
      return thunkAPI.rejectWithValue("Error de loggeo");
    }
    return data;
  }
);

export const userValidate = createAsyncThunk(
  "user/validate",
  async (params, thunkAPI) => {
    const response = await post("/auth/validate");
    return response.data;
  }
);

export const logout = createAsyncThunk("user/logout", async (arg, thunkAPI) => {
  const response = await post("/auth/logout");
  return response.data;
});

// export const signup = createAsyncThunk("user/signup", async (data, thunkAPI) => {
//   const response = await post("/auth/signup", {
//     name: data.name,
//     birthday: data.birthday,
//     city: data.city,
//     email: data.email,
//     password: data.password,
//   })
//   console.log(response.data)
//   return response.data
// })

export const signup = createAsyncThunk(
  "user/signup",
  async (data, thunkAPI) => {
    const res = await fetch(
      "https://backendtzuzulcode.wl.r.appspot.com/auth/signup",
      {
        method: "POST",
        credentials: "include", // Permite realizar la peticion al server, el server sabe cuales y las envía
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          birthday: data.birthday,
          city: data.city,
          email: data.email,
          password: data.password,
        }),
      }
    );
    const inf = await res.json();
    //action.payload del reducer (fullfilled)

    if (!inf.id) {
      console.log("Lanzando error");
      return thunkAPI.rejectWithValue("Error de loggeo");
    }
    return inf;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    logged: false,
    name: "",
    loading: false,
    error: true,
    message: "",
  },
  //Thunks
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
      state.error = false;
      state.message = "";
      state.name = "";
    });

    builder.addCase(login.rejected, (state, action) => {
      state.logged = false;
      state.loading = false;
      state.error = true;
      state.message = action.payload.message;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.logged = true;
      state.error = false;
      state.name = action.payload.name;
    });

    builder.addCase(userValidate.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(userValidate.fulfilled, (state, action) => {
      state.logged = true;
      state.name = action.payload.name;
      state.error = false;
    });

    builder.addCase(userValidate.rejected, (state, action) => {
      state.error = true;
      state.logged = false;
      state.message = "Error";
      state.loading = false;
    });

    builder.addCase(logout.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(logout.fulfilled, (state, action) => {
      state.logged = false;
      state.name = "";
      state.error = false;
      state.loading = false;
    });

    builder.addCase(logout.rejected, (state, action) => {
      state.logged = true;
      state.error = true;
      state.message = "Error";
    });

    builder.addCase(signup.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(signup.fulfilled, (state, action) => {
      state.loading = false;
      state.message = "Registro exitoso";
      state.logged = true;
      state.name = action.payload.name;
    });
  },
});

// export const { logout } = userSlice.actions;
export default userSlice.reducer;
