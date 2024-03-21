import React, {useEffect, useRef, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import 'react-native-get-random-values';
import uuid from 'react-native-uuid';
import {Counter, CounterProps} from './Counter';

type TableProps = {
  max_selectable: number;
  head: string[];
  data: string[][];
};

type RowProps = CounterProps & {
  data: string[];
  index: number;
  disabled?: boolean;
  isHead?: boolean;
};

const Row = ({data, isHead = false, onPlus, onMinus, ...rest}: RowProps) => {
  const {colors} = useTheme();

  const cellStyle = (_checked: boolean) => {
    if (_checked) {
      return [styles.cell, {borderColor: colors.primary, borderWidth: 2}];
    }

    return [styles.cell, {borderColor: colors.border}];
  };

  return (
    <View style={[styles.row, {borderColor: colors.background}]}>
      <View style={cellStyle(isHead)}>
        {!isHead && <Counter onPlus={onPlus} onMinus={onMinus} {...rest} />}
      </View>
      {data.map(value => {
        return (
          <View key={uuid.v4().toString()} style={cellStyle(isHead)}>
            <Text style={styles.cellText}>{value}</Text>
          </View>
        );
      })}
    </View>
  );
};
export const CountedTable = ({head, data, max_selectable}: TableProps) => {
  const {colors} = useTheme();
  const [countedRows, setCountedRows] = useState<number[]>(data.map(() => 0));
  const selectedRows = useRef(0);

  const onMinus = (newValue: number, index: number) => {
    console.log('CountedTable', countedRows, selectedRows.current);

    const newCountedRows = countedRows;
    newCountedRows[index] = newValue;
    setCountedRows(newCountedRows);
    if (selectedRows.current === 0) {
      selectedRows.current = 0;
      return false;
    }

    selectedRows.current--;
    return true;
  };

  const onPlus = (newValue: number, index: number) => {
    console.log('CountedTable', countedRows, selectedRows.current);

    if (selectedRows.current < max_selectable) {
      const newCountedRows = countedRows;
      newCountedRows[index] = newValue;
      setCountedRows(newCountedRows);
      selectedRows.current++;

      return true;
    }

    return false;
  };

  return (
    <View style={[styles.table, {backgroundColor: colors.background}]}>
      {head && head.length !== 0 && (
        <Row
          key={-1}
          index={-1}
          data={head}
          isHead={true}
          onPlus={() => {}}
          onMinus={() => {}}
        />
      )}
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <Row
            data={item}
            index={index}
            initValue={countedRows[index]}
            onMinus={newValue => onMinus(newValue, index)}
            onPlus={newValue => onPlus(newValue, index)}
            minValue={0}
            maxValue={max_selectable}
          />
        )}
        keyExtractor={() => uuid.v4().toString()}
      />
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
