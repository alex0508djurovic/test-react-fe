import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, Persistor } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const persistConfig = {
    key: 'root',      
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export function setupStore() {
    const store = configureStore({
        reducer: persistedReducer,
    });
    const persistor: Persistor = persistStore(store);
    return { store, persistor };
}

const { store } = setupStore();

export type AppDispatch = typeof store.dispatch;