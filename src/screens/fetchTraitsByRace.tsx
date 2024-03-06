import {Text} from 'react-native';
import {useGetTraitByIndexQuery} from '../services/api';
import {RaceIndexRequest} from '../types/requests';

export default function ExportRace(input: RaceIndexRequest) {
  const {data, error, isLoading, isFetching} = useGetTraitByIndexQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  //se il result precedente non va bene
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <>
      {data?.results.map((Name, index) => (
        <Text key={index}>{Name.name}</Text>
      ))}
    </>
  );
}
