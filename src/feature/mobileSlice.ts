import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  isOpen: boolean
}

const initialState: initialStateType = {
  isOpen: false
}

export const mobileSlice = createSlice({
  name: 'mobile',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const {
  open,
  close
} = mobileSlice.actions

export default mobileSlice.reducer