import React, {useState} from 'react';
import {View, StatusBar, ScrollView} from 'react-native';
import {Icon, Text} from 'react-native-elements';

import {SearchBar} from 'react-native-elements';
import theme from '../../../config/theme';

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
      <View
        style={{
          paddingVertical: 7,
          flexDirection: 'row-reverse',
          backgroundColor: '#fffff0',
        }}>
        <Icon
          size={23}
          style={{
            marginRight: 20,
            alignSelf: 'center',
            flex: 1,
            justifyContent: 'center',
          }}
          name="filter"
          type="ionicon"
        />
        <Text style={{fontSize: 18, color: 'black', padding: 5}}>Filters</Text>
      </View>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}} />
    </View>
  );
}
