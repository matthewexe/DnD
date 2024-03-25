import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import StyledTitle from '../../ui/texts/StyledTitle';
import {StyledTextInput} from '../../ui/StyledTextInput';
import {View} from 'react-native';
import {StyledButton} from '../../ui/StyledButton';

export const NewGame = () => {
  const [gameName, setGameName] = useState('');
  const [gameDesc, setGameDesc] = useState('');

  return (
    <SafeAreaView>
      {/* Success */}
      {/* Error */}
      <StyledTitle>New Game</StyledTitle>
      <View>
        <View>
          <StyledTextInput placeholder="Game Name" onChangeText={setGameName} />
          <StyledTextInput placeholder="Game Desc" onChangeText={setGameDesc} />
        </View>
        <View>
          <StyledButton text="Create Game" onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>
  );
};
