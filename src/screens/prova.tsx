import { useEffect, useState } from "react";
import { Text } from "react-native";

export default function ExportDwarf() {
    const [race, setRace] = useState('dwarf');
    const [raceData, setRaceData] = useState({}); // Aggiunto un nuovo stato per i dati della razza

    useEffect(() => {
        
        fetch(`https://www.dnd5eapi.co/api/races/${race}`) 
        .then((res) => res.json()) // Chiamata a json()
        .then((data) => {
            setRaceData(data); // Aggiornamento dello stato con i dati della razza
        });
    }, [race]); // Aggiunto race come dipendenza per rifetchare se race cambia

    return(
        <Text>{race}</Text>
    );
}
