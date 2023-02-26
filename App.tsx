import React from 'react';

import { View, StatusBar } from 'react-native';
import { Main } from './src/Main';

export default function App() {
  return (
    <>
        <StatusBar barStyle='light-content'  />

        <Main />
        
    </>
  );
}

