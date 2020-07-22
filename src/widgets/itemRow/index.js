import React from 'react';
import get from 'lodash/get';
import {View, ActivityIndicator} from 'react-native';
import first from 'lodash/first';

import {Image, Text} from 'react-native-elements';

import style from './style';

function renderItem({item, index}) {
  return (
    <View
      key={index}
      style={[style.itemWrapper, {opacity: get(item, 'sold') ? 0.5 : 1}]}>
      <Image
        source={{uri: first(item.images)}}
        style={style.itemImage}
        PlaceholderContent={<ActivityIndicator />}
      />  
      <View style={{paddingHorizontal: 8}}>
        <Text style={style.title}>{item.title}</Text>
        <Text style={style.price}>PKR {item.price}</Text>
        <Text
          style={
            style.location
          }>{`${item.location.city} ,${item.location.province}`}</Text>
        <View style={style.lowerText}>
          <Text style={style.location}>
            {item.type} || {item.condition}{get(item, 'sold') ? ' || Sold' : ''}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default renderItem;
