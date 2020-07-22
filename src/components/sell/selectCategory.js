import React from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';

import BackButton from '../../widgets/backButton';
import { categories } from '../../../config/static';

export default function selectCategory(props) {
  function onPress(item) {
    console.log(item)
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <BackButton goBack={()=>props.navigation.navigate('Explore')} title="Select Category" />
      <View style={{ marginTop: 80, paddingHorizontal: 10 }}>
        {categories.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            leftIcon={item.icon}
            bottomDivider
            onPress={() => onPress(item.title)}
            chevron
          />
        ))}
      </View>
    </View>
  );
}
