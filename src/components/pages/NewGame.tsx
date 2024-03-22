/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import StyledTitle from '../ui/texts/StyledTitle';
import { StyledSubtitle } from '../ui/texts/StyledSubtitle';
import { HomeStackScreenProps } from '../../routes/HomeParamList';

type Props = HomeStackScreenProps<'ListGame'>;

export const NewGame = ({ props }: Props) => {
    return (<>
        <View>
            <StyledTitle>New Game</StyledTitle>
            <Text />
            <StyledSubtitle>Create a new game</StyledSubtitle>
            <Text />


        </View>
    </>);

}