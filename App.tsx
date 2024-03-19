import React from 'react';
import {SafeAreaView} from 'react-native';
import {RealmProvider} from '@realm/react';
import Test from './src/components/Test';
import TestModel from './src/models/Test';
import ListItems from './src/components/ListItems';
import DeleteAll from './src/components/DeleteAll';

const App = () => {
  return (
    <RealmProvider path="test.db" schema={[TestModel]} schemaVersion={2}>
      <SafeAreaView>
        <Test />
        <ListItems />
        <DeleteAll />
      </SafeAreaView>
    </RealmProvider>
  );
};

export default App;
