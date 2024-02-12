/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {ApiProvider} from '@reduxjs/toolkit/query/react';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {api} from './src/services/api';
import Test from './src/components/Test';

function App(): React.JSX.Element {
  return (
    <ApiProvider api={api}>
      <SafeAreaView>
        <Text>Equipment</Text>
        <Test />
      </SafeAreaView>
    </ApiProvider>
  );
}

export default App;
