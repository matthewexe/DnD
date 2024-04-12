import React, {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import StyledTitle from '../components/ui/texts/StyledTitle';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Error} from '../components/modals/Error';
import {Loading} from '../components/modals/Loading';
import {StyledModal} from '../components/ui/StyledModal';

type Props = PropsWithChildren<{
  title: React.ReactNode;
  loading?: boolean;
  error?: string | undefined;
  errorOnPress?: () => void;
}>;

export const NewPlayerView = ({
  title,
  loading,
  error,
  errorOnPress = () => {},
  children,
}: Props) => {
  return (
    <SafeAreaView>
      <StyledModal isVisible={error !== undefined}>
        <Error message={error ?? ''} onPress={errorOnPress} />
      </StyledModal>
      {loading && <Loading />}
      <ScrollView>
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
