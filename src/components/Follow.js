import React from 'react'
import {SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native'
import {StatusBar} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Follow = ({title}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold'
    }
})

export default Follow;
