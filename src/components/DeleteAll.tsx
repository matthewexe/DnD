import {useRealm} from '@realm/react';
import React from 'react';
import {Button} from 'react-native';

const DeleteAll = () => {
  const realm = useRealm();

  const handleDeleteAll = () => {
    realm.write(() => {
      realm.deleteAll();
    });
  };

  return <Button title="Delete All" onPress={handleDeleteAll} />;
};

export default DeleteAll;
