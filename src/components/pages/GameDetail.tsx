import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {StyledButton} from '../ui/StyledButton';
import StyledTitle from '../ui/texts/StyledTitle';
import {HomeScreenProps} from '../../routes/HomeProps';
import {StyledSubtitle} from '../ui/texts/StyledSubtitle';
import {StyledLabeledValue} from '../ui/texts/StyledLabeledValue';
import {useRealm} from '@realm/react';

type Props = HomeScreenProps<'GameDetail'>;

export const GameDetail = ({navigation, route}: Props) => {
  const realm = useRealm();
  const gameId = route.params.gameId;
  const title = 'Titolo';

  return (
    <>
      <SafeAreaView>
        <StyledTitle>{title}</StyledTitle>
        <Text />
        <View>
          {/* <Text>Name:</Text>
          <Text /> */}
          <StyledLabeledValue label={'Description'} value={'fottiti'} />
        </View>
        <StyledSubtitle>Players</StyledSubtitle>
        <View style={styles.content}>
          <StyledButton text={'Delete Player'} style={{}} />
        </View>
        <Text />
        <View style={{alignSelf: 'center'}}>
          <StyledButton
            text={'Add Player'}
            style={{}}
            onPress={() =>
              navigation.navigate('NewPlayer_BasicInfo', {gameId: gameId})
            }
          />
        </View>
        <View>{/* tutte le card dei player */}</View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',

    alignSelf: 'center',
  },
});
