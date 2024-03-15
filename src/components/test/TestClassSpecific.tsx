import React from 'react';
import {useGetResourcesByClassByLevelQuery} from '../../services/api';
import {ClassIndexRequest} from '../../types/requests';
import {Text, View} from 'react-native';
import {classSpecificToString} from '../../helper/classSpecific';

type Props = {
  classIndex: ClassIndexRequest;
  level: number;
};

export const TestClassSpecific = ({level, classIndex}: Props) => {
  const {data} = useGetResourcesByClassByLevelQuery({
    index: classIndex,
    class_level: level,
  });

  return (
    <View>
      {data &&
        data.class_specific &&
        classSpecificToString(data.class_specific).map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
    </View>
  );
};
