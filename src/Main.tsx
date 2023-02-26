import React from 'react';
import { SafeAreaView } from 'react-native';
import  Home  from './screens/Stack/Home/Home';

 

const Main: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Home />
        
    </SafeAreaView>
  )
}

export  {Main};