import {Text} from 'react-native';
import {useGetFeaturesForClassByIndexQuery} from '../services/api';
import {ClassIndexRequest} from '../types/requests';

export default function FeaturesByClassComponent({
  input,
}: {
  input: ClassIndexRequest;
}) {
  const {data, error, isLoading, isFetching} =
    useGetFeaturesForClassByIndexQuery({
      index: input,
    });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <>
      <Text>Hai disponibili {data?.count} caratteristiche</Text>
      {data?.results.map((choice, index) => (
        <Text key={index}>{choice.name}</Text>
      ))}
    </>
  );
}
//url x il fatch?
