import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {StyledCheckBox} from '../ui/StyledCheckBox';
import {useTheme} from '@react-navigation/native';
import 'react-native-get-random-values';
import uuid from 'react-native-uuid';

type TableProps = {
  head: string[];
  data: string[][];
};

type RowProps = {
  data: string[];
  checked?: boolean;
};

function Row({data, checked = true}: RowProps) {
  const {colors} = useTheme();

  const cellStyle = (_checked: boolean) => {
    if (!_checked) {
      return [styles.cell, {borderColor: colors.primary, borderWidth: 2}];
    }

    return [styles.cell, {borderColor: colors.border}];
  };

  return (
    <View style={[styles.row, {borderColor: colors.background}]}>
      <View style={cellStyle(checked)}>
        {checked && <StyledCheckBox text="" />}
      </View>
      {data.map(value => {
        return (
          <View key={uuid.v4().toString()} style={cellStyle(checked)}>
            <Text style={styles.cellText}>{value}</Text>
          </View>
        );
      })}
    </View>
  );
}

export const SelectableTable = ({head, data}: TableProps) => {
  const {colors} = useTheme();

  return (
    <View style={[styles.table, {backgroundColor: colors.background}]}>
      {head && head.length !== 0 && <Row key={0} data={head} checked={false} />}
      <FlatList
        data={data}
        renderItem={({item}) => <Row data={item} />}
        keyExtractor={() => uuid.v4().toString()}
      />
      {/* {data &&
        data.length !== 0 &&
        data.map((value, index) => <Row key={index} data={value} />)} */}
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    padding: 15,
  },
  row: {
    flexDirection: 'row',
    flexShrink: 1,
  },
  cell: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
  },
  cellText: {
    color: 'white',
  },
});
