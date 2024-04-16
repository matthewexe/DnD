import React, {PropsWithChildren, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Collapsible from 'react-native-collapsible';
import {StyledText} from './texts/StyledText';
import {customTheme2} from '../../constants/theme';

type Props = PropsWithChildren<{
  title: string;
  firstCollapsed?: boolean;
  icon?: (collapsed: boolean) => React.ReactElement;
}>;

export const StyledAccordionItem = ({
  title,
  firstCollapsed = true,
  icon = () => <></>,
  children,
}: Props) => {
  const [collapsed, setCollapsed] = useState(firstCollapsed);

  const onPress = () => {
    setCollapsed(cur => !cur);
  };

  return (
    <View style={[styles.container]}>
      <Pressable onPress={onPress}>
        <View style={styles.button}>
          <StyledText>{title}</StyledText>
          <View style={[styles.buttonIcon]}>{icon(collapsed)}</View>
        </View>
      </Pressable>
      <Collapsible collapsed={collapsed}>{children}</Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderColor: customTheme2.colors.border,
    borderWidth: 1,
    borderRadius: 6,
    marginVertical: 5,
  },
  button: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  buttonIcon: {},
});
