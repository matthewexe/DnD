
import React, { useState } from 'react'
import { Button, View } from 'react-native'
import { Counter } from './Counter';

interface Props{
    title:string;
    color?:string;
    increment?:Function;
}
export function MyButton({ title, increment }:Props) {
  const [count,setCount]=useState(1);
  return (
    <View>
      <Button title={title} color="#1ACDA5"onPress={setCount=>count+1} />
      {/* <View>{count}</View> */}
    </View>
  )
}


