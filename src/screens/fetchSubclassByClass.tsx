import {Text} from 'react-native';
import {useGetSubClassesAvilableByIndexQuery} from '../services/api';
import {ClassIndexRequest} from '../types/requests';

export default function SubclassComponent({input}: {input: ClassIndexRequest}) {
  const {data, error, isLoading, isFetching} =
    useGetSubClassesAvilableByIndexQuery({
      index: input,
    });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  //se il result precedente non va bene
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <>
      <Text>Sottoclasse:</Text>
      <Text>Possibili scelte: {data?.count}</Text>
      {data?.results.map((choice, index) => (
        <Text key={index}>{choice.name}</Text>
      ))}
    </>
  );
}

//NB: Non so ancora come utilizzare il campo url della map
