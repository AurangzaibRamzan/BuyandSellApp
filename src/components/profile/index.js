import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';

import InfoText from '../../widgets/infoText';
import BaseIcon from '../../widgets/baseIcon';
import Chevron from '../../widgets/baseIcon/chevron';

import styles from './styles';

export default function ProfileView() {
  function onPressOptions() {
    console.log('press');
  }

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.userRow}>
        <View style={styles.userImage}>
          <Avatar
            rounded
            size="large"
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEdtdakIn31nwneDvxXl5te0lPq5uJtdmUXg&usqp=CAU',
            }}
          />
        </View>
        <View>
          <Text style={{fontSize: 16}}>{'Imran Khan'}</Text>
          <Text
            style={{
              color: 'gray',
              fontSize: 16,
            }}>
            {'ImranKhan@gmail.com'}
          </Text>
        </View>
      </View>
      <InfoText text="Account" />
      <ListItem
        title="Change Password"
        onPress={() => onPressOptions('Change Password')}
        rightTitleStyle={{fontSize: 15}}
        containerStyle={styles.listItemContainer}
        leftIcon={
          <BaseIcon
            containerStyle={{backgroundColor: '#FAD291'}}
            icon={{
              type: 'material-community',
              name: 'form-textbox-password',
            }}
          />
        }
        rightIcon={<Chevron />}
      />
      <ListItem
        title="Change Phone Number"
        onPress={() => onPressOptions('Change Phone Number')}
        rightTitleStyle={{fontSize: 15}}
        containerStyle={styles.listItemContainer}
        leftIcon={
          <BaseIcon
            containerStyle={{backgroundColor: '#57DCE7'}}
            icon={{
              type: 'material-community',
              name: 'cellphone-iphone',
            }}
          />
        }
        rightIcon={<Chevron />}
      />
      <ListItem
        title="Change Location"
        onPress={() => onPressOptions('Change Location')}
        rightTitleStyle={{fontSize: 15}}
        containerStyle={styles.listItemContainer}
        leftIcon={
          <BaseIcon
            containerStyle={{backgroundColor: '#FEA8A1'}}
            icon={{
              type: 'material',
              name: 'location-on',
            }}
          />
        }
        rightIcon={<Chevron />}
      />
      <InfoText text="More" />
      <View>
        <ListItem
          title="About US"
          onPress={() => onPressOptions('About US')}
          containerStyle={styles.listItemContainer}
          leftIcon={
            <BaseIcon
              containerStyle={{backgroundColor: '#A4C8F0'}}
              icon={{
                type: 'ionicon',
                name: 'md-information-circle',
              }}
            />
          }
          rightIcon={<Chevron />}
        />
        <ListItem
          title="Terms and Policies"
          onPress={() => onPressOptions('Terms and Policies')}
          containerStyle={styles.listItemContainer}
          leftIcon={
            <BaseIcon
              containerStyle={{backgroundColor: '#C6C7C6'}}
              icon={{
                type: 'entypo',
                name: 'light-bulb',
              }}
            />
          }
          rightIcon={<Chevron />}
        />
        <ListItem
          title="Share our App"
          onPress={() => onPressOptions('Share our App')}
          containerStyle={styles.listItemContainer}
          leftIcon={
            <BaseIcon
              containerStyle={{
                backgroundColor: '#C47EFF',
              }}
              icon={{
                type: 'entypo',
                name: 'share',
              }}
            />
          }
          rightIcon={<Chevron />}
        />
        <ListItem
          title="Rate Us"
          onPress={() => onPressOptions('Rate Us')}
          containerStyle={styles.listItemContainer}
          badge={{
            value: 5,
            textStyle: {color: 'white'},
            containerStyle: {backgroundColor: 'white', marginTop: 0},
          }}
          leftIcon={
            <BaseIcon
              containerStyle={{
                backgroundColor: '#FECE44',
              }}
              icon={{
                type: 'entypo',
                name: 'star',
              }}
            />
          }
          rightIcon={<Chevron />}
        />
        <ListItem
          title="Send FeedBack"
          onPress={() => onPressOptions('Send FeedBack')}
          containerStyle={styles.listItemContainer}
          leftIcon={
            <BaseIcon
              containerStyle={{
                backgroundColor: '#00C001',
              }}
              icon={{
                type: 'materialicon',
                name: 'feedback',
              }}
            />
          }
          rightIcon={<Chevron />}
        />
      </View>
    </ScrollView>
  );
}
