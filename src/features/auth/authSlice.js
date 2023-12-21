import { createSlice } from '@reduxjs/toolkit'
import { userSignup, userLogin, userAuthenticate } from './authActions'

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userToken')
      state.loading = false
      state.userInfo = null
      state.userToken = null
      state.error = null
    },
    setCredentials: (state, { payload }) => {
      state.userInfo = payload
    },
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    [userSignup.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userSignup.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true
    },
    [userSignup.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    }, 
    [userAuthenticate.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userAuthenticate.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true
      state.userToken = payload.userToken
    },
    [userAuthenticate.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

export const { logout, setCredentials } = authSlice.actions

export default authSlice.reducer
