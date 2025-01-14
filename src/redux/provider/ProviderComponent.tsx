'use client';
import React from 'react'
import { Provider } from 'react-redux';
import store from '../store';
import { ToastContainer } from 'react-toastify';

const ProviderComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ToastContainer autoClose={1000} />
      {children}
    </Provider>
  )
}

export default ProviderComponent