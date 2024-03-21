import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {StyledCheckBox} from '../ui/StyledCheckBox';
import {useTheme} from '@react-navigation/native';
import 'react-native-get-random-values';
import uuid from 'react-native-uuid';

type TableProps = {
  max_selectbale: number;
  head: string[];
  data: string[][];
};

type RowProps = {
  data: string[];
  index: number;
  canCheck?: boolean;
  isChecked: boolean;
  disabled?: boolean;
  onSelect: (index: number) => void;
};

const Row = ({data, index, isChecked, canCheck = true, onSelect}: RowProps) => {
  const {colors} = useTheme();

  const cellStyle = (_checked: boolean) => {
    if (!_checked) {
      return [styles.cell, {borderColor: colors.primary, borderWidth: 2}];
    }

    return [styles.cell, {borderColor: colors.border}];
  };

  return (
    <View style={[styles.row, {borderColor: colors.background}]}>
      <View style={cellStyle(canCheck)}>
        {canCheck && (
          <StyledCheckBox
            text=""
            value={isChecked}
            onValueChange={() => onSelect(index)}
          />
        )}
      </View>
      {data.map(value => {
        return (
          <View key={uuid.v4().toString()} style={cellStyle(canCheck)}>
            <Text style={styles.cellText}>{value}</Text>
          </View>
        );
      })}
    </View>
  );
};
export const SelectableTable = ({head, data, max_selectbale}: TableProps) => {
  const {colors} = useTheme();
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const onSelectedRow = (index: number) => {
    console.log('Selected row:', selectedRows);
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== index));
    } else {
      if (selectedRows.length < max_selectbale) {
        setSelectedRows([...selectedRows, index]);
      } else {
        // Optionally show an alert or notification that the max has been reached
        console.log('Maximum selection reached');
      }
    }
  };

  return (
    <View style={[styles.table, {backgroundColor: colors.background}]}>
      {head && head.length !== 0 && (
        <Row
          key={0}
          index={-1}
          data={head}
          canCheck={false}
          isChecked={false}
          onSelect={_ => {}}
        />
      )}
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <Row
            data={item}
            index={index}
            onSelect={onSelectedRow}
            isChecked={selectedRows.includes(index)}
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
