import React from 'react'
import {SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native'
import {StatusBar, Image} from 'react-native'
// import Icon from 'react-native-vector-icons/Ionicons';


//Random data 
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'What is the best way to search flat on rent or PGs in Gurgaon?',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Amazon se order ka refund kaise paye?',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Why pluto is no longer the ninth planet of the solar system?',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d89',
    title: 'Consumer forum mein complaint kese kare?',
  },
]

//Displaying individual item
function Item({title}) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default function List() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{width: 50, height: 50, marginLeft: 20}}
          source={require('../assets/left.png')}
        />
        <Text style={styles.heading}>My Questions</Text>
      </View>

      {/* <Icon name="ios-add" color="#ccc" size={25} /> */}

      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: '#323232',
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: '#fcfcfc',
  },
  heading: {
    fontSize: 35,
    color: '#323232',
    marginBottom: 8,
    marginHorizontal: 16,
    marginLeft: 30,
  },
  // back:{
  //   marginLeft:16,
  //   marginTop:4
  // }
})
