import {Text} from 'react-native';
import {useGetProficienciesForClassByIndexQuery} from '../../../services/api';
import {ClassIndexRequest} from '../../../types/requests';
import {StyledText} from '../../ui/texts/StyledText';

export default function ProficiencyD({input}: {input: ClassIndexRequest}) {
  const {data, error, isLoading, isFetching} =
    useGetProficienciesForClassByIndexQuery({
      index: input,
    });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <>
      <StyledText>You have {data?.count} proficiencies:</StyledText>
      {data?.results.map((choice, index) => (
        <StyledText key={index}>{choice.name}</StyledText>
      ))}
    </>
  );
}
//NB: Non so ancora come utilizzare il campo url della map
