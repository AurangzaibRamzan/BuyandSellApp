/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StatusBar, FlatList} from 'react-native';
import {Icon, Text} from 'react-native-elements';

import {SearchBar} from 'react-native-elements';
import theme from '../../../config/theme';
import {itemList} from '../../../config/static';
import renderItem from '../../widgets/itemRow';

import style from './styles';

export default function ExploreView() {
  const [search, setSearch] = useState();
  return (
    <View>
      <StatusBar backgroundColor={theme.colors.primary} />
      <SearchBar
        placeholder="what you need ?"
        onChangeText={setSearch}
        lightTheme
        round
        containerStyle={{backgroundColor: theme.colors.primary, margin: -2}}
        inputContainerStyle={{backgroundColor: 'white'}}
        inputStyle={{marginLeft: -3}}
        searchIcon={{size: 25}}
        value={search}
      />
      <View style={style.filterDiv}>
        <Icon size={23} style={style.filterIcon} name="filter" type="ionicon" />
        <Text style={style.filterText}>Filters</Text>
      </View>
      <FlatList
        contentContainerStyle={{backgroundColor: 'white', paddingBottom: 100}}
        data={itemList}
        keyExtractor={(item, index) => item.key}
        renderItem={renderItem}
      />
    </View>
  );
}
