import React, {useState} from 'react';
import {useRealm, Realm} from '@realm/react';
import {Button, SafeAreaView, Text, TextInput} from 'react-native';
import 'react-native-get-random-values';

const Test = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const realm = useRealm();

  const handleAdd = () => {
    realm.write(() => {
      realm.create('Test', {
        id: new Realm.BSON.UUID(),
        name: name,
        description: desc.split(','),
      });
    });
  };
  return (
    <SafeAreaView>
      <Text>Hi</Text>
      <TextInput placeholder="Name" onChangeText={setName} />
      <TextInput placeholder="Description" onChangeText={setDesc} />
      <Button title="Add" onPress={() => handleAdd()} />
    </SafeAreaView>
  );
};

export default Test;
