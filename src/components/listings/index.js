import React from 'react';
import {FlatList, View} from 'react-native';
import {Text} from 'react-native-elements';
import {listItems} from '../../../config/static';
import renderItem from '../../widgets/itemRow';
import styles from './style';

import theme from '../../../config/theme';

export default function ListingsView() {
  return (
    <View>
      <View style={styles.filterWrapper}>
        <Text
          style={[styles.tileText, {backgroundColor: theme.colors.primary}]}>
          All
        </Text>
        <Text
          style={[styles.tileText, {backgroundColor: 'grey', opacity: 0.9}]}>
          Active
        </Text>
        <Text
          style={[styles.tileText, {backgroundColor: 'grey', opacity: 0.9}]}>
          Sold
        </Text>
      </View>
      <FlatList
        contentContainerStyle={{backgroundColor: 'white', paddingBottom: 100}}
        data={listItems}
        keyExtractor={(item, index) => item.key}
        renderItem={renderItem}
      />
    </View>
  );
}
