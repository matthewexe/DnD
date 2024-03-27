import React, {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import StyledTitle from '../components/ui/texts/StyledTitle';
import {ScrollView, StyleSheet, View} from 'react-native';

type Props = PropsWithChildren<{
  title: React.ReactNode;
  loading?: boolean;
  error?: string | undefined;
}>;

export const NewPlayerView = ({title, loading, error, children}: Props) => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* TODO: Modal loading/error */}
        <StyledTitle>{title}</StyledTitle>
        <View style={[styles.container]}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 13,
  },
});
