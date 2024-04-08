import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SelectMenu} from '../../ui/SelectMenu';
import {useGetEndpointResourceQuery} from '../../../services/api';
import {ClassIndexRequest} from '../../../types/requests';
import StyledTitle from '../../ui/texts/StyledTitle';
import {SafeAreaView} from 'react-native-safe-area-context';
import ClassByIndex from '../../dictionary/class/ClassByIndex';

export const DictionaryClass = () => {
  const {data: classData, isLoading: isLoadingClass} =
    useGetEndpointResourceQuery('classes');

  const [classState, setClass] = useState<ClassIndexRequest>('barbarian');

  if (isLoadingClass) {
    return <Text>Loading...</Text>;
  }
  return (
    <>
      <SafeAreaView style={styles.safeview}>
        <ScrollView>
          <StyledTitle>Classes</StyledTitle>
          <View style={styles.container}>
            <View
              style={{
                width: 200,
                height: 200,
              }}>
              <Image
                source={require('@assets/class_logo.png')}
                style={{width: '100%', height: '100%', borderRadius: 1000}}
              />
            </View>
            <SelectMenu
              label=""
              onSelect={item => {
                setClass(item.index);
              }}
              data={classData?.results ?? []}
            />
          </View>
          <View style={styles.total}>
            <ClassByIndex input={classState} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    padding: 30,
    flexDirection: 'column', // o 'column' per bottoni verticali
    justifyContent: 'space-between', // Distribuisce uniformemente lo spazio
  },
  total: {
    padding: 30,
    flexDirection: 'column', // o 'column' per bottoni verticali
    justifyContent: 'space-between', // Distribuisce uniformemente lo spazio
  },
  safeview: {
    bottom: 10,
  },
});
