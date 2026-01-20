// app/providers/ReduxProvider.tsx
'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/lib/store/store';
import Preloader from '@/components/elements/Preloader'


interface ReduxProviderProps {
  children: ReactNode;
}

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={<Preloader />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
