import React, { useEffect, useState } from "react";
import { Text } from "react-native";



export function Counter(){
    const [count,setCount]=useState(0);
    setCount(count=>count+1);
    return count;
}





// export function Counter(){
//     const [count, setCount]= useState(0)

//     setCount(count=>count+1);

//     useEffect(()=>{
//        const num= setCount((count)=>count+1)
//        return num;
//     })
//     return<Text>{count}</Text>
// }