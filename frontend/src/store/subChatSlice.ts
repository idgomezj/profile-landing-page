import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleChat: (state) => {
      state.isOpen = !state.isOpen;
    },
    setChatState: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { toggleChat, setChatState } = chatSlice.actions;
export default chatSlice.reducer; 