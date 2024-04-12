import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RouteStack from './src/routes/routesStack.js';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <RouteStack />
      </NavigationContainer>
    </>
  );
};

export default App;
