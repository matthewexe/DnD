import {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {useGetRacesByIndexQuery} from '../services/api';
import {RaceIndexRequest} from '../types/requests';
import {RaceResponse} from '../types/responses';

export default function ExportDwarf() {
  const razze: RaceIndexRequest = [
    'dragonborn',
    'dwarf',
    'elf',
    'gnome',
    'half-elf',
    'half-orc',
    'halfling',
    'human',
    'tiefling',
  ];

  const [race, setRace] = useState<RaceIndexRequest>('dragonborn');

  const {data, error, isLoading} = useGetRacesByIndexQuery({index: race});

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  //se il result precedente non va bene

  return (
    <>
      <Text>{data?.index ?? 'race not found'}</Text>
      <Text>{data?.index ?? 'race not found'}</Text>
    </>
  );
}
