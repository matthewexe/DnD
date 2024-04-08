import {StyledText} from 'components/ui/texts/StyledText';
import React from 'react';
import {NewPlayerView} from 'views/NewPlayerView';

export const DownloadScheda = () => {
  return (
    <NewPlayerView title="Player Card" errorOnPress={() => {}}>
      <StyledText>Player card</StyledText>
    </NewPlayerView>
  );
};
