/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
// eslint-disable-next-line prettier/prettier
import { HomeStackScreenProps } from '../../routes/HomeParamList';
import { NavigationProp } from '@react-navigation/native';
import { StyledButton } from '../ui/StyledButton';
import StyledTitle from '../ui/texts/StyledTitle';

type Props = HomeStackScreenProps<'GameDetail'> & NavigationProp & {
    gameTitle: string;
};

export const GameDetail = ({ props, navigation }: Props) => {
    return (<>
        <View>
            <StyledTitle>{props.gameTitle}</StyledTitle>
            <StyledButton text={'messagge'} />
            <StyledButton text={'Delete Player'} />
            <StyledButton text={'Add Player'} onPress={navigation.navigate('BasicInfo')} />
        </View>
    </>);
};
