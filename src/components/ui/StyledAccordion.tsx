import React, {PropsWithChildren, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Collapsible from 'react-native-collapsible';

type Props = PropsWithChildren<{
  title: string;
  firstCollapsed?: boolean;
  icon?: React.ReactElement;
}>;

export const StyledAccordionItem = ({
  title,
  firstCollapsed = true,
  icon,
  children,
}: Props) => {
  const [collapsed, setCollapsed] = useState(firstCollapsed);

  const onPress = () => {
    setCollapsed(cur => !cur);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <View style={styles.button}>
          <Text>
            {title}
            {icon}
          </Text>
        </View>
      </Pressable>
      <Collapsible collapsed={collapsed}>{children}</Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
