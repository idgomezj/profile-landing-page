import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import chatReducer from './subChatSlice';


const chatPersistConfig = {
  key: 'chat',
  storage,
  whitelist: ['chatId'] // only projectId will be persisted
};

const persistedChatReducer = persistReducer(chatPersistConfig, chatReducer);


export const store = configureStore({
  reducer: {
    chat: persistedChatReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 