import React from 'react'
import {SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native'
import {StatusBar, Image} from 'react-native'
// import Icon from 'react-native-vector-icons/Ionicons';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Geeky Ranjit ',
    isFollowing:true
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'GSM Arena',
    isFollowing:true
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Trip Advisor',
    isFollowing:true
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d89',
    title: 'Autocar',
    isFollowing:true
  },
]

function Item({title,isFollowing}) {
  let Image_Http_URL = {
    uri:
      'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
  }
  return (
    <View style={styles.item}>
      <Image
          source={Image_Http_URL}
          style={{ width: 120, height: 120, borderRadius: 120 / 2 }}
        />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>following</Text>
  
    </View>
  )
}

export default class Follow extends React.Component {
  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <Image
                style={{width: 50, height: 50,marginLeft:20}}
                source={require('../assets/left.png')}
              />
          <Text style={styles.heading}>following</Text>
        </View>

        <FlatList
          contentContainerStyle={styles.list}
          data={DATA}
          numColumns
          renderItem={({item}) => <Item title={item.title}/>}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#b642f4',
    flex: 1,
    margin: 10,
    minWidth: 170,
    maxWidth: 170,
    height: 220,
    maxHeight: 220,
    borderRadius: 10,
    // backgroundColor: '#CCC',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    color: 'black',
    marginTop:10
  },
  heading: {
    fontSize: 35,
    color: '#323232',
    marginBottom: 8,
    marginHorizontal: 16,
    marginLeft: 30,
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  // back:{
  //   marginLeft:16,
  //   marginTop:4
  // }
})
