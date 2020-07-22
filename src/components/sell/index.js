import React, {useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';

export default function SellView(props) {
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      props.navigation.navigate('selectCategory');
    }
  }, [isFocused]);
  
  return null;
}
