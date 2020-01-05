import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import {StatusBar} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Follow from '../components/Follow';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     image_url: 'What is the best way to search flat on rent or PGs in Gurgaon?',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     image_url: 'Amazon se order ka refund kaise paye?',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     image_url: 'Why pluto is no longer the ninth planet of the solar system?',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d89',
//     image_url: 'Consumer forum mein complaint kese kare?',
//   }
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29121',
//     image_url: 'Consumer forum mein complaint kese kare?',
//   }
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29345',
//     image_url: 'Consumer forum mein complaint kese kare?',
//   }
// ];

const FollowingList = () =>{
    return (
        <View>
            <Text>following</Text>
            <Follow title="Geeky Ranjit"/>
        </View>
    )
}

const styles = StyleSheet.create({});

export default FollowingList;



