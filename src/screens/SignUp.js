// SignUp.js
import React from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native'
// import {Input, Button, Image} from 'react-native-elements'

export default class SignUp extends React.Component {
  
  render() {
    let Image_Http_URL = {
      uri:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
    }
    return (
      <View style={styles.container}>
        <Image
          source={Image_Http_URL}
          style={{width: 120, height: 120, borderRadius: 120 / 2}}
        />
  

        <TextInput
          style={styles.input}
          placeholder="Name"
          autoCapitalize="none"
          placeholderTextColor="white"
          
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Status"
          autoCapitalize="none"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Location"
          autoCapitalize="none"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Bio"
          autoCapitalize="none"
          placeholderTextColor="white"
        />
        <TouchableOpacity style={styles.button} onPress={this.signUp}>
          <Text style={{fontSize: 20}}>Save</Text>
        </TouchableOpacity>

      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: '85%',
    height: 55,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    margin: 10,
    padding: 8,
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 25,
    alignItems: 'center',
    backgroundColor: '#6637D1',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
    padding: 25,
    width: '85%',
    borderRadius: 50,
  },


})
