// In App.js in a new project

import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {TestClassSpecific} from './src/components/test/TestClassSpecific';
import {Provider} from 'react-redux';
import {store} from './src/store';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <TestClassSpecific classIndex="barbarian" level={1} />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
