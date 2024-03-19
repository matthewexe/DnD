import {Text} from 'react-native';
import {useGetProficienciesForClassByIndexQuery} from '../../services/api';
import {ClassIndexRequest} from '../../types/requests';

export default function ProficiencyByClassComponent({
  input,
}: {
  input: ClassIndexRequest;
}) {
  const {data, error, isLoading, isFetching} =
    useGetProficienciesForClassByIndexQuery({
      index: input,
    });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) return <Text>wait for response from the server</Text>;
  return (
    <>
      <Text>You have {data?.count} proficiencies:</Text>
      {data?.results.map((choice, index) => (
        <Text key={index}>{choice.name}</Text>
      ))}
    </>
  );
}
//NB: Non so ancora come utilizzare il campo url della map
