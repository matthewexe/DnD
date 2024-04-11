import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import StyledTitle from '../../ui/texts/StyledTitle';
import {StyledTextInput} from '../../ui/StyledTextInput';
import {View} from 'react-native';
import {StyledButton} from '../../ui/StyledButton';
import {NewPlayerView} from '../../../views/NewPlayerView';
import {useRealm} from '@realm/react';
import {Game} from '../../../models/Game';
import {GameModel} from '../../../models/types';
import Realm from 'realm';
import 'react-native-get-random-values';
import {HomeScreenProps} from '../../../routes/HomeProps';
import {StyledModal} from '../../ui/StyledModal';
import {StyledText} from '../../ui/texts/StyledText';

type Props = HomeScreenProps<'NewGame'>;

type State = {
  error: string | undefined;
  loading: boolean;
};

export const NewGame = ({navigation}: Props) => {
  const realm = useRealm();

  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const [gameName, setGameName] = useState('');
  const [gameDesc, setGameDesc] = useState('');

  const data = useRef({
    name: '',
    description: '',
  });

  const [state, setState] = useState<State>({
    error: undefined,
    loading: false,
  });

  const createGame = () => {
    console.log('Creating game');
    realm.write(() => {
      const result = realm.create('Game', {
        id: new Realm.BSON.ObjectId(),
        name: data.current.name,
        description: data.current.description,
      });

      if (!result) {
        setState({...state, error: 'Error creating game'});
      } else {
        setSuccessModalVisible(true);
      }
    });
  };

  const changeName = (name: string) => {
    data.current.name = name;
    setGameName(name);
  };

  const changeDesc = (desc: string) => {
    data.current.description = desc;
    setGameDesc(desc);
  };

  return (
    <>
      <StyledModal
        isVisible={true}
        style={{justifyContent: 'space-between', height: 200}}>
        <StyledTitle
          style={{borderTopLeftRadius: 12, borderTopRightRadius: 12}}>
          Game created
        </StyledTitle>
        <View style={{padding: 20}}>
          <StyledText>Game created successfully</StyledText>
        </View>
        <StyledButton
          text="Ok"
          onPress={() => {
            setSuccessModalVisible(false);
            navigation.navigate('ListGame');
          }}
        />
      </StyledModal>
      <NewPlayerView
        title="New Game"
        loading={state.loading}
        error={state.error}
        errorOnPress={() => {
          navigation.navigate('ListGame');
        }}>
        <View>
          <View>
            <StyledText>Game Name:</StyledText>
            <StyledTextInput
              placeholder="Game Name"
              onChangeText={changeName}
            />
            <StyledText>Game Description:</StyledText>
            <StyledTextInput
              placeholder="Game Desc"
              onChangeText={changeDesc}
              multiline
              numberOfLines={4}
            />
          </View>
          <View style={{marginTop: 20}}>
            <StyledButton
              text="Create Game"
              onPress={() => {
                createGame();
              }}
            />
          </View>
        </View>
      </NewPlayerView>
    </>
  );
};
