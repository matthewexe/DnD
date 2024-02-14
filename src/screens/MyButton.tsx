
import React from 'react'
import { Button, View } from 'react-native'
import { Counter } from './Counter';

interface Props{
    title:string;
    color?:string;
    increment?:Function;
}
export function MyButton({ title, increment }:Props) {
  return (
    <View>
      <Button title={title} color="#1ACDA5"onPress={Counter} />
    </View>
  )
}


